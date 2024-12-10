import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, useSortable, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Draggable Header Component
const DraggableHeader = ({ column, index }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: column.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
    padding: "10px",
    backgroundColor: "#00bfff",
    color: "#fff",
    textAlign: "center",
    border: "1px solid black",
  };

  return (
    <th ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {column.label}
    </th>
  );
};

// Main DataTable Component
const DataTable = () => {
  const [columns, setColumns] = useState([
    { id: "date", label: "Record Date" },
    { id: "ip", label: "Source IP" },
    { id: "totalVolume", label: "Total Volume (MB)" },
    { id: "upVolume", label: "Up Volume (MB)" },
    { id: "downVolume", label: "Down Volume (MB)" },
    { id: "totalBandwidth", label: "Total Bandwidth (Mbps)" },
    { id: "upBandwidth", label: "Up Bandwidth (Mbps)" },
    { id: "downBandwidth", label: "Down Bandwidth (Mbps)" },
  ]);

  const data = [
    { date: "04/12/24", ip: "203.122.4.134", totalVolume: "39.11", upVolume: "28.20", downVolume: "10.91", totalBandwidth: "32.79", upBandwidth: "31.86", downBandwidth: "0.93" },
    { date: "07/12/24", ip: "203.122.4.134", totalVolume: "38.57", upVolume: "29.79", downVolume: "8.78", totalBandwidth: "32.99", upBandwidth: "32.09", downBandwidth: "0.90" },
    { date: "09/12/24", ip: "203.122.4.134", totalVolume: "38.36", upVolume: "31.21", downVolume: "7.15", totalBandwidth: "33.77", upBandwidth: "32.91", downBandwidth: "0.86" },
    // Add more rows as needed...
  ];

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    const oldIndex = columns.findIndex((col) => col.id === active.id);
    const newIndex = columns.findIndex((col) => col.id === over.id);

    setColumns((prev) => arrayMove(prev, oldIndex, newIndex));
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <SortableContext items={columns.map((col) => col.id)}>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <DraggableHeader key={column.id} column={column} index={index} />
              ))}
            </tr>
          </thead>
        </SortableContext>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td
                  key={column.id}
                  style={{
                    padding: "10px",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  {row[column.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </DndContext>
  );
};

export default DataTable;
