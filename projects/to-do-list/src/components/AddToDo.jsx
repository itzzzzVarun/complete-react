import css from './AddToDo.module.css';

function AddToDo () {
  return  <div class="container text-center">
  <div class={`${css['my-row']} row`}>
    <div class="col-6">
      <input type="text" placeholder='Enter Todo here'/>
    </div>
    <div class="col-4">
      <input type="date"  />
    </div>
    <div class="col-2">
      <input type="button" class='btn btn-success' value="Add" />
    </div>
  </div>
</div>
}

export default AddToDo