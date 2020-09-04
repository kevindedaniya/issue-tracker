import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import AddNewIssueJumbotron from '@/components/AddNewIssueJumbotron.vue';
import ViewIssues from '@/components/ViewIssues.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Home, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {},
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Home', () => {
  test('is a vue component', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('find AddNewIssueJumbotron component', () => {
    const jumbotronComp = wrapper.findComponent(AddNewIssueJumbotron);
    expect(jumbotronComp.exists()).toBe(true)
  });
  
  test('find ViewIssues component', () => {
    const ViewIssuesComp = wrapper.findComponent(ViewIssues);
    expect(ViewIssuesComp.exists()).toBe(true)
  });
});
