import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        name: 'Luc Hurst',
      },
      {
        id: 2,
        name: 'Carl Boyce',
      },
      {
        id: 3,
        name: 'Luis Marsh',
      },
      {
        id: 4,
        name: 'Harlen Gill',
      },
      {
        id: 5,
        name: 'Laura Morgan',
      },
    ],
    status: [
      {
        flag: 'to_do',
        display_flag: 'To Do',
        color_class: 'secondary',
      },
      {
        flag: 'in_progress',
        display_flag: 'In Progress',
        color_class: 'primary',
      },
      {
        flag: 'done',
        display_flag: 'Done',
        color_class: 'success',
      },
      {
        flag: 'close',
        display_flag: 'Close',
        color_class: 'info',
      },
    ],
    issues: [],
  },

  mutations: {
    SET_ISSUES(state, issues) {
      state.issues = issues;
    },

    ADD_ISSUE(state, newIssue) {
      state.issues.push(newIssue);
    },

    DELETE_ISSUE(state, index) {
      state.issues.splice(index, 1);
    },

    MARK_ISSUE_AS_CLOSE(state, index) {
      state.issues[index].status = 'close';
    },
  },

  actions: {
    setIssues(context, payload) {
      context.commit('SET_ISSUES', payload);
    },

    addNewIssue(context, payload) {
      context.commit('ADD_ISSUE', payload);

      localStorage.setItem('issues', JSON.stringify(context.state.issues));
    },

    deleteIssue(context, issueId) {
      const index = context.state.issues.findIndex((issue) => issue.id === issueId);

      if (index !== -1) {
        context.commit('DELETE_ISSUE', index);

        localStorage.setItem('issues', JSON.stringify(context.state.issues));
      }
    },

    markIssueAsClosed(context, issueId) {
      const index = context.state.issues.findIndex((issue) => issue.id === issueId);

      if (index !== -1) {
        context.commit('MARK_ISSUE_AS_CLOSE', index);

        localStorage.setItem('issues', JSON.stringify(context.state.issues));
      }
    },
  },

  getters: {
    getIssues(state) {
      return state.issues;
    },

    getUsers(state) {
      return state.users;
    },

    getStatus(state) {
      return state.status;
    },

    getOpenIssues(state) {
      return state.issues.filter((issue) => issue.status.flag !== 'close');
    },

    getUserName(state) {
      return (userId) => state.users.filter((user) => user.id === userId)[0]?.name;
    },

    getIssue(state) {
      return (issueId) => state.issues.find((issue) => issue.id === issueId) ?? null;
    },

    getStatusDisplayFlag(state) {
      return (flag) => state.status.find((s) => s.flag === flag)?.display_flag ?? null;
    },

    getStatusColorClass(state) {
      return (flag) => state.status.find((s) => s.flag === flag)?.color_class ?? null;
    },
  },

  modules: {
  },
});
