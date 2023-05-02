import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Chart } from "react-google-charts";
import { piChartData, piChartOptions } from "../../data/Dashboard/PiChart";
import { BarChartData, BarChartOptions } from "../../data/Dashboard/BarChart";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  const staticsArr = [
    {
      title: "Active Student",
      count: 100000,
    },
    {
      title: "Active Student",
      count: 100000,
    },
    {
      title: "Active Student",
      count: 100000,
    },
    {
      title: "Active Student",
      count: 100000,
    },
  ];

  const tableData = [
    {
      schoolName: "Lincoln Elementary",
      studentName: "Emily Rodriguez",
      class: "4A",
      district: "Westchester",
    },
    {
      schoolName: "Jefferson Middle School",
      studentName: "David Kim",
      class: "7C",
      district: "Central City",
    },
    {
      schoolName: "Roosevelt High School",
      studentName: "Sophia Lee",
      class: "11B",
      district: "East Bay",
    },
    {
      schoolName: "Washington Elementary",
      studentName: "Jacob Chen",
      class: "2B",
      district: "Southside",
    },
    {
      schoolName: "Franklin Middle School",
      studentName: "Isabella Garcia",
      class: "6A",
      district: "North Hills",
    },
  ];

  return (
    <main className={styles.dashboard}>
      <Breadcrumb text="Skill Yatra Dashboard" />
      <div className={styles.dashboard__wrapper}>
        <div className={styles.dashboard__infor}>
          <div className={styles.dashboard__infor__pichart}>
            <Chart
              chartType="PieChart"
              data={piChartData}
              options={piChartOptions}
              width={"362px"}
              height={"362px"}
            />
          </div>
          <div className={styles.dashboard__infor__barchart}>
            <Chart
              chartType="BarChart"
              width="707px"
              height="362px"
              data={BarChartData}
              options={BarChartOptions}
            />
          </div>
        </div>
        <div className={styles.dashboard__status}>
          {staticsArr.map((item) => {
            return (
              <div className={styles.dashboard__status__card}>
                <h5>{item.title}</h5>
                <div>{item.count}</div>
              </div>
            );
          })}
        </div>
        <table className={styles.dashboard__table}>
          <thead>
            <tr>
              <td>School Name</td>
              <td>Student Name</td>
              <td>Class</td>
              <td>District</td>
            </tr>
          </thead>
          <tbody>
            {tableData.map((school) => (
              <tr>
                <td>{school.schoolName}</td>
                <td>{school.studentName}</td>
                <td>{school.class}</td>
                <td>{school.district}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
