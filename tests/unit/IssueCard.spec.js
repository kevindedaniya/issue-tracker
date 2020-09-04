import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import IssueCard from '@/components/IssueCard.vue';

let wrapper;
let store;
let getters;
const localVue = createLocalVue();
localVue.use(Vuex);

beforeEach(() => {
  getters = {
    getStatus: () => {
      return [
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
      ];
    },

    getUsers: () => {
      return [
        {
          id: 1,
          name: 'laboriosam eos',
        },
        {
          id: 2,
          name: 'earum justo',
        },
      ];
    },

    getOpenIssues: () => this.getIssues,

    getUserName: () => {
      return () => 'laboriosam eos';
    },

    getIssue: () => {
      return (id) => {
        return {
          id: '1a',
          summary: 'Explicabo laboriosam eos',
          severity: 'high',
          due_date: '2020-12-31',
          assigned_to: 1,
          status: 'to_do',
          description: 'phasellus rem voluptas ullamcorper facere',
        }
      };
    },

    getStatusDisplayFlag: () => {
      return () => 'To Do';
    },

    getStatusColorClass: () => {
      return () => 'dark';
    },
  };

  store = new Vuex.Store({
    getters,
  });

  wrapper = shallowMount(IssueCard, {
    propsData: {
      issueId: '1a',
    },
    mocks: {},
    stubs: {},
    methods: {},
    store,
    localVue,
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('IssueCard', () => {
  test('is a vue component', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('check summary text', () => {
    expect(wrapper.find('.issue-card__summary').text()).toBe('Explicabo laboriosam eos');
  });
});
