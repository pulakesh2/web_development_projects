import React, { Fragment, useEffect } from "react";
import Table from "./Table";
import style from "./TabList.module.css";
import useFetch from "../../useHooks/use-Fetch";
import { useParams } from "react-router";

const TabList = () => {
  const { dataBase, isLoading, fetchData } = useFetch();

  const params = useParams();

  useEffect(() => {
    fetchData(params.id.slice(1));
  }, []);

  const tabs = dataBase.length ? (
    dataBase.map((tab) => {
      return (
        <Table
          key={Math.random().toString()}
          title={tab.title}
          description={tab.description}
        />
      );
    })
  ) : (
    <p className={style.update__soon}>Review will be updated soon</p>
  );

  return (
    <ul className={style.tab__list}>
      {isLoading ? (
        <span
          className={`loading loading-spinner text-primary loading-lg ${style.isLoading}`}
        ></span>
      ) : (
        <Fragment>
          <h2 className={style.points}>Important Points</h2>
          {tabs}
        </Fragment>
      )}
    </ul>
  );
};

export default TabList;
