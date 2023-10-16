import { ChartInfo } from "@types";
import { action, autorun, makeObservable, observable } from "mobx";

class ChartStore {
  @observable
  charts: ChartInfo[] = [];

  constructor() {
    makeObservable(this);
  }

  @action.bound
  appendCharts(charts: ChartInfo[]) {
    this.charts = [...this.charts, ...charts];
  }
}

const chartStore = new ChartStore();

autorun(() => {
  chartStore.appendCharts([
    {
      name: "test_chart----1",
      desc: "",
    },
    {
      name: "test_chart----2",
      desc: "",
    },
  ]);
});

export default chartStore;
