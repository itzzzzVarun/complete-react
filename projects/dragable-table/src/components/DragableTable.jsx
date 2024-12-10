import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, useSortable, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Draggable Header Component
const DraggableHeader = ({ column }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: column.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
    padding: "8px",
    fontWeight: "bold",
    backgroundColor: "lightblue",
    border: "1px solid black",
    textAlign: "center",
    minWidth: "150px",
  };

  return (
    <th ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {column.label}
    </th>
  );
};

// Main Table Component
const DraggableTableUI = () => {
  const [columns, setColumns] = useState([
    { id: "name", label: "Name" },
    { id: "age", label: "Age" },
    { id: "email", label: "Email" },
  ]);

  const rows = [
    { name: "John Doe", age: 28, email: "john@example.com" },
    { name: "Jane Smith", age: 32, email: "jane@example.com" },
    { name: "Alice Johnson", age: 25, email: "alice@example.com" },
    { name: "Bob Brown", age: 40, email: "bob@example.com" },
  ];

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    const oldIndex = columns.findIndex((col) => col.id === active.id);
    const newIndex = columns.findIndex((col) => col.id === over.id);

    setColumns((prev) => arrayMove(prev, oldIndex, newIndex));
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <table style={{ borderCollapse: "collapse", width: "100%", margin: "16px 0" }}>
        <thead>
          <SortableContext items={columns.map((col) => col.id)}>
            <tr>
              {columns.map((column) => (
                <DraggableHeader key={column.id} column={column} />
              ))}
            </tr>
          </SortableContext>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td
                  key={column.id}
                  style={{
                    padding: "8px",
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

export default DraggableTableUI;
