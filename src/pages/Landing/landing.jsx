import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import styles from "./Landing.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Landing() {
  const [userRole, setUserRole] = useState();
  const userTypeId = sessionStorage.getItem("role");
  useEffect(() => {
    axios
      .post("http://localhost:8000/user/role", { id: userTypeId })
      .then((response) => {
        setUserRole(response.data.role);
      });
  }, []);

  const accessArr = {
    1: [
      {
        title: "View Dashboard",
        path: "/view",
      },
      {
        title: "Bulk Import (csv)",
        path: "./",
      },
      {
        title: "Report Generation",
        path: "./",
      },
    ],
    2: [
      {
        title: "Add Candidate",
        path: "/form",
      },
      {
        title: "View Candidate",
        path: "/view",
      },
      {
        title: "Modify Candidate",
        path: "/modify",
      },
    ],
    3: [
      {
        title: "Modify Candidate",
        path: "/modify",
      },
      {
        title: "Approve Candidate",
        path: "./",
      },
    ],
  };

  return (
    <main className={styles.landing}>
      <Breadcrumb text="Skill Yatra Dashboard" />
      <div className={styles.landing__wrapper}>
        <h2>{userRole}</h2>
        <div className={styles.landing__options__container}>
          {accessArr?.[userTypeId].map((userOption) => (
            <Link
              to={userOption.path}
              className={styles.landing__options__container__option}
            >
              {userOption.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
