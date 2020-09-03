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
                  id="issueSummary"
                  placeholder="Issue Summary"
                  v-model="summary"
                  required
                  @change="validateInput"
                />
                <div class="invalid-feedback"></div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6 pr-md-4">
                  <label for="selectSeverity">Severity</label>
                  <select
                    class="form-control custom-select"
                    id="selectSeverity"
                    v-model="severity"
                    @change="validateInput"
                    required
                  >
                    <option value="" disabled selected>Select Severity</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                  <div class="invalid-feedback"></div>
                </div>

                <div class="form-group col-md-6 pl-md-4">
                  <label for="selectDueDate">Due Date</label>
                  <input
                    type="date"
                    class="form-control"
                    id="selectDueDate"
                    placeholder="select"
                    v-model="dueDate"
                    @change="validateInput"
                    required
                  />
                  <div class="invalid-feedback"></div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6 pr-md-4">
                  <label for="selectUser">Assigned To</label>
                  <select
                    class="form-control custom-select"
                    id="selectUser"
                    v-model="assignedTo"
                    @change="validateInput"
                    required
                  >
                    <option value="" disabled selected>Select User</option>
                    <option v-for="user in usersList" :key="user.id" :value="user.id">
                      {{ user.name }}
                    </option>
                  </select>
                  <div class="invalid-feedback"></div>
                </div>

                <div class="form-group col-md-6 pl-md-4">
                  <label for="selectStatus">Status</label>
                  <select
                    class="form-control custom-select"
                    id="selectStatus"
                    v-model="status"
                    @change="validateInput"
                    required
                  >
                    <option value="" disabled selected>Select Status</option>
                    <option v-for="(s, i) in statusList" :key="i" :value="s.flag">
                      {{ s.display_flag }}
                    </option>
                  </select>
                  <div class="invalid-feedback"></div>
                </div>
              </div>

              <div class="form-group">
                <label for="issueDescription">Description</label>
                <textarea
                  class="form-control"
                  id="issueDescription"
                  placeholder="Describe the issue..."
                  rows="4"
                  v-model="description"
                  @change="validateInput"
                  required
                ></textarea>
                <div class="invalid-feedback"></div>
              </div>
            </div>

            <div class="modal-body__actions">
              <button
                type="button"
                @click="resetModalFields"
                class="btn close-btn"
                data-dismiss="modal"
              >Close</button>

              <button
                type="button"
                class="btn save-btn"
                @click="saveIssue"
              >Save Issue</button>

              <div class="clearfix"></div>
            </div>

            <div id="saveBtnFeedback" class="float-right mt-2"></div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="jumbotron jumbotron-fluid jumbotron-sm text-white mb-0">
      <div
        class="container p-sm-0 d-flex
          flex-column flex-sm-row justify-content-between align-items-center"
      >
        <span class="jumbotron__text mb-3 mb-sm-0">All Issues</span>
        <button
          class="btn"
          data-toggle="modal"
          data-target="#addNewIssueModal"
        >Add New Issue</button>
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
  input, select, option,textarea
    font: normal normal normal 13px/18px Roboto Regular
    color: #3C3B3B
    cursor: pointer
  input::placeholder, textarea::placeholder, select:invalid, input[type="date"]:invalid
    color: #BCCCD6
  .btn
    border-radius: 3px
    font: normal normal normal 13px/18px Roboto
    padding: 0.7em 2em
  .close-btn
    background-color: #FFFFFF
    border: 1px solid #ACC1D0
    color: #637F96
  .save-btn
    float: right
    background-color: #08A55D
    border: 1px solid #08A55D
    color: #FFFFFF

.jumbotron
  padding-top: 2.5em
  padding-bottom: 2.5em
  background-color: #356DA7
  &__text
    font-size: 20px
  button
    font: normal normal normal 17px/23px Roboto Regular
    background-color: #00B0F0
    color: #FFF
    &:hover
      background-color: #FFF
      color: #00B0F0

.form-group label
  font-size: 12px

.custom-select
  background: url('../assets/images/bx-chevron-down.svg') no-repeat right
  background-position-x: 95%

input[type="date"]::-webkit-calendar-picker-indicator
  filter: invert(0.6)

.invalid-feedback, #saveBtnFeedback
  font: normal normal normal 11px/13px Roboto
  color: #E24E3B
</style>

<script>
export default {
  data() {
    return {
      summary: null,
      severity: '',
      dueDate: null,
      assignedTo: '',
      status: '',
      description: null,
      usersList: [],
      statusList: [],
    };
  },

  mounted() {
    this.usersList = this.$store.getters.getUsers;
    this.statusList = this.$store.getters.getStatus;
  },

  methods: {
    validateInput(event) {
      event.currentTarget.classList.remove('is-invalid');

      if (!event.currentTarget.checkValidity()) {
        event.currentTarget.classList.add('is-invalid');

        document.querySelector(`#${event.currentTarget.id} + .invalid-feedback`)
          .innerHTML = event.currentTarget.validationMessage;
      }
    },

    saveIssue() {
      if (!this.summary
        || !this.description
        || !this.dueDate
        || this.status === ''
        || this.assignedTo === ''
        || this.severity === '') {
        document.querySelector('#saveBtnFeedback').innerHTML = 'Please fill all input fields';
        return;
      }

      document.querySelector('#saveBtnFeedback').innerHTML = null;

      const payload = {
        id: window.create_UUID(),
        summary: this.summary,
        severity: this.severity,
        due_date: this.dueDate,
        assigned_to: this.assignedTo,
        status: this.status,
        description: this.description,
      };

      this.$store.dispatch('addNewIssue', payload);

      this.resetModalFields();

      $('#addNewIssueModal').modal('toggle');
    },

    resetModalFields() {
      this.summary = null;
      this.description = null;
      this.dueDate = null;
      this.severity = '';
      this.assignedTo = '';
      this.status = '';

      $('.invalid-feedback').html('');
      $('#saveBtnFeedback').html('');
      $('input').removeClass('is-invalid');
      $('select').removeClass('is-invalid');
    },
  },
};
</script>
