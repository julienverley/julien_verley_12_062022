import React from "react";
import data from "../data";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const dataRadialBarChart = [
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];
const style = {
  top: 0,
  left: 350,
  lineHeight: "36px",
};

const dataScore = [
  {
    name: "score",
    score: data.USER_MAIN_DATA[0].todayScore,
  },
];

const Score = () => {
  // console.log(data.USER_MAIN_DATA[0].todayScore);
  // if [0] todayScore
  // if [1] score
  return (
    <div>
      <div>Score</div>
      <RadialBarChart
        width={263}
        height={258}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={dataScore}
        // data={data.USER_MAIN_DATA[0]}
        startAngle={80}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#FF0101" }}
          background
          clockWise
          // dataKey="todayScore"
          dataKey="score"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </div>
  );
};

export default Score;
