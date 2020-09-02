<template>
  <div>
    <div
        class="modal fade"
        id="addNewIssueModal"
        tabindex="-1"
        aria-labelledby="addNewIssueModal"
        aria-hidden="true"
      >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body">
            <div class="modal-body__title">Add New Issue</div>

            <div class="modal-body__form">
              <div class="form-group">
                <label for="issue_summary">Summary</label>
                <input
                  type="text"
                  class="form-control"
                  id="issue_summary"
                  placeholder="Issue Summary"
                />
              </div>

              <div class="form-row">
                <div class="form-group col-md-6 pr-md-4">
                  <label for="selectSeverity">Severity</label>
                  <select class="form-control custom-select" id="selectSeverity">
                    <option selected>Select Severity</option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                  </select>
                </div>

                <div class="form-group col-md-6 pl-md-4">
                  <label for="selectDueDate">Due Date</label>
                  <input type="date" class="form-control" id="selectDueDate" placeholder="select" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6 pr-md-4">
                  <label for="selectUser">Assigned To</label>
                  <select class="form-control custom-select" id="selectUser">
                    <option selected>Select User</option>
                    <option value="1">Harvey</option>
                    <option value="2">Mick</option>
                    <option value="3">Rachel</option>
                  </select>
                </div>

                <div class="form-group col-md-6 pl-md-4">
                  <label for="selectStatus">Status</label>
                  <select class="form-control custom-select" id="selectStatus">
                    <option selected>Select Severity</option>
                    <option value="todo">ToDo</option>
                    <option value="in_progress">InProgress</option>
                    <option value="close">Close</option>
                    <option value="done">Done</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="issueDescription">Description</label>
                <textarea
                  class="form-control"
                  id="issueDescription"
                  placeholder="Describe the issue..."
                  rows="4"
                ></textarea>
              </div>
            </div>

            <div class="modal-body__actions">
              <button type="button" class="btn close-btn" data-dismiss="modal">Close</button>
              <button type="button" class="btn save-btn">Save Issue</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="jumbotron jumbotron-fluid jumbotron-sm text-white mb-0">
      <div class="container p-sm-0">
        <span class="jumbotron__text">All Issues</span>
        <button
          class="float-right btn"
          data-toggle="modal"
          data-target="#addNewIssueModal"
        >Add New Issue</button>

        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.modal-body
  padding: 1.8em 2.5em
  &__title
    margin-bottom: 1.2em
    font: normal normal normal 20px/26px Roboto Regular
  &__form
    margin-bottom: 2.5em
  .custom-select::placeholder, input::placeholder, textarea::placeholder
    font: normal normal normal 13px/18px Roboto Regular
    color: #BCCCD6
    border-color: #BCCCD6
    cursor: pointer
  .btn
    border-radius: 3px
    font: normal normal normal 13px/18px Roboto
    padding: 0.7em 2em

  .close-btn
    background: #FFFFFF 0% 0% no-repeat padding-box
    border: 1px solid #ACC1D0
    color: #637F96
  .save-btn
    float: right
    background: #08A55D 0% 0% no-repeat padding-box
    border: 1px solid #08A55D
    color: #FFFFFF

.jumbotron
  padding-top: 2.5em
  padding-bottom: 2.5em
  background-color: #356DA7
  &__text
    font-size: 20px
  button
    background-color: #00B0F0
    font-size: 17px
    color: #FFF
    &:hover
      background-color: #FFF
      color: #00B0F0

.form-group label
  font-size: 12px

.custom-select, input, textarea
  font: normal normal normal 13px/18px Roboto Regular
  color: #869198
  cursor: pointer

.custom-select
  background: url('../assets/images/bx-chevron-down.svg') no-repeat right
  background-position-x: 95%

input[type="date"]::-webkit-calendar-picker-indicator
  filter: invert(0.6)
</style>

<script>
export default {

};
</script>
