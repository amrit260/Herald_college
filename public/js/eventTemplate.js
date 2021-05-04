function eventTemplate() {
  let events = JSON.parse(
    document.getElementById('event').getAttribute('data-events')
  );

  console.log(events);

  const eventCard = events.map((el) => {
    let date = undefined;
    if (el.startDate) {
      const a = new Date(el.startDate);

      date = a.toISOString().split('T')[0];
    }

    return `   <section class="container text-left">
    <div
      class="card text-dark mb-3 font-weight-bold mt-2"
      style="max-width: 75%; float: right"
    >
      <div
        class="card-header"
        style="
          background-color: #21b6a8;
          color: white;
          float: right;
          max-height: 60px;
        "
      >
        <i class="fa fa-fw fa-bell" color="white"></i> Important Notice

        <button
          class="btn btn-danger text-white btn-sm"
          data-target="#mymodel2"
          data-toggle="modal"
          style="float: right; margin: 3px; width: 8%"
        >
          <i class="fa fa-fw fa-times font-weight-bold" color="white"></i>
        </button>
        <div class="modal" id="mymodel2">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="text-center text-dark">Delete Events</h3>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body">
                <h5 class="text-dark text-center font-weight-bold">
                  Are you sure you want to delete the Event?
                </h5>
              </div>

              <div class="modal-footer justify-content-center">
                <button class="btn btn-success" style="width: 70px" data-eventID = ${el._id} id = "deleteEventBtn">
                  OK
                </button>
                <button
                  class="btn btn-danger"
                  data-dismiss="modal"
                  style="width: 70px"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          class="btn btn-success text-white btn-sm"
          data-target="#mymodel3"
          data-toggle="modal"
          style="float: right; margin: 3px; width: 8%"
        >
          <i class="fa fa-fw fa-pencil font-weight-bold" color="white"></i>
        </button>

        <div class="modal" id="mymodel3">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="text-center text-dark">Edit Events</h3>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body">
              <form  method='POST' enctype= "multipart/form-data" id = "updateEventForm" action='/api/v1/events/update/${el._id}'>
            <div class="form-group font-weight-bold">
              <div class="nav-item dropdown">
            

                <select style="margin-bottom:20px" class=" nav-link dropdown-toggle " form = "updateEventForm" name = "noticeType" id="noticeType">
                <i class="fa fa-fw fa-bell"></i>
  <option value="Academic Notice">Academic Notice</option>
  <option dropdown-item value="Non Academic Notice">Non Academic Notice</option>

</select>


                
              </div>
              <input
              form="updateEventForm"
              name= "name"
              value="${el.name}"
              style="width: 50%; height: 40px"
            ></input>
            <textarea
              form="updateEventForm"
              name="description"
              
              style="width: 90%; height: 70px"
            >${el.description}</textarea>
             

              <div>
               
                <input type="file" name="photos" multiple form = "updateEventForm" id="img"  accept="image/*">
              </div>

              <div class="event-date mt-4 mb-4">
                <label>Event Date:</label>
                <input
                  type="date"
                  size="30"
                  name="startDate"
                  class="form-control"
                  value = "${date}"
                  id="datepicker"
                  style="width: 60%; float: right; margin-right: 15%"
                />
              </div>

              <label class="text-dark">Location:</label>
              <input
              type="text"
                
            value="${el.location}"
                name = "location"
              
                style="
                  width: 60%;
                  float: right;
                  margin-right: 15%;
                  height: 40px;
                "
              ></input>
            </div> <div class="modal-footer justify-content-center">
          <button class="btn btn-success" style="width: 70px">Edit</button>
          <button
            class="btn btn-danger"
            data-dismiss="modal"
            style="width: 70px"
          >
            Cancel
          </button>
        </div>
                </form>
               
              </div>

             
            </div>
          </div>
        </div>
      </div>

      <div class="card-body bg-light">
        <h5 class="card-title">${el.name}</h5>
        <p class="card-text">
          ${el.description}
        </p>
      </div>
    </div>
  </section>`;
  });

  const eventTemplate = `
<div class="add-icon">
  <button
    class="btn btn-secondary text-white btn-sm"
    data-target="#mymodel"
    data-toggle="modal"
    style="margin-left: 85%; width: 50px"
  >
    Add
  </button>

  <div class="modal" id="mymodel">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="text-center">Add Events</h3>
          <button type="button" class="close" data-dismiss="modal">
            &times;
          </button>
        </div>

        <div class="modal-body">
          <form  method='POST' enctype= "multipart/form-data" id = "addEventForm" action='/api/v1/events'>
            <div class="form-group font-weight-bold">
              <div class="nav-item dropdown">
            

                <select style="margin-bottom:20px" class=" nav-link dropdown-toggle " form = "addEventForm" name = "noticeType" id="noticeType">
                <i class="fa fa-fw fa-bell"></i>
  <option value="Academic Notice">Academic Notice</option>
  <option dropdown-item value="Non Academic Notice">Non Academic Notice</option>

</select>


                
              </div>

              <input
                form="addEventForm"
                name= "name"
                placeholder="TITLE OF EVENTS"
                style="width: 50%; height: 40px"
              ></input>
              <textarea
                form="addEventForm"
                name="description"
                placeholder="DESCRIPTION OF EVENTS"
                style="width: 90%; height: 70px"
              ></textarea>

              <div>
               
                <input type="file" name="photos" multiple form = "addEventForm" id="img"  accept="image/*">
              </div>

              <div class="event-date mt-4 mb-4">
                <label>Event Date:</label>
                <input
                  type="date"
                  size="30"
                  name="startDate"
                  class="form-control"
                  id="datepicker"
                  style="width: 60%; float: right; margin-right: 15%"
                />
              </div>

              <label class="text-dark">Location:</label>
              <input
              type="text"
                form="addEventForm"
                placeholder="Location of Events"
                name = "location"
                style="
                  width: 60%;
                  float: right;
                  margin-right: 15%;
                  height: 40px;
                "
              ></input>
            </div> <div class="modal-footer justify-content-center">
          <button class="btn btn-success" style="width: 70px">Add</button>
          <button
            class="btn btn-danger"
            data-dismiss="modal"
            style="width: 70px"
          >
            Cancel
          </button>
        </div>
          </form>
        </div>

       
      </div>
    </div>
  </div>
</div>
${eventCard}
`;

  return eventTemplate;
}

export default eventTemplate;
