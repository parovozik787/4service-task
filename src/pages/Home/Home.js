import "./Home.scss";
import { doughnutChartInit } from "../../components/Charts/Chart-doughnut/Chart-doughnut";
import { horizontalChartInit } from "../../components/Charts/Chart-horizontal/Chart-horizontal";
import { lineChartInit } from "../../components/Charts/Chart-line/Chart-line";
import { sidebar } from "../../components/Sidebar/Sidebar";
import { burgerInit } from "../../components/Burger/Burger";
import { selectInit } from "../../components/Select/Select";

window.onload = function() {
  selectInit();
  burgerInit();
  doughnutChartInit();
  horizontalChartInit();
  lineChartInit();
  sidebar();
};
