import React, { createRef, useEffect } from "react";
import ChartJS from "chart.js";
import { CaseDataProps } from "../interfaces";

export default function Chart({ data }: CaseDataProps) {
  const chartRef = createRef<HTMLCanvasElement>();

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      const chart = chartRef.current?.getContext("2d");
      const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      const maleCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      const femaleCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      data.forEach(result => {
        const date = result.date;
        if (date) {
          const monthIdx = date.getMonth();

          if (result.gender === "F") {
            femaleCount[monthIdx]++;
          } else {
            maleCount[monthIdx]++;
          }
        }
      });

      if (chart) {
        new ChartJS(chart, {
          type: "line",
          data: {
            //Bring in data
            labels: labels.slice(0, new Date().getMonth() + 1),
            datasets: [
              {
                label: "Men",
                data: maleCount,
                backgroundColor: "#afeeee",
                borderColor: "#afeeee",
                fill: false
              },
              {
                label: "Female",
                data: femaleCount,
                backgroundColor: "#ffc0cb",
                borderColor: "#ffc0cb",
                fill: false
              }
            ]
          },
          options: {
            legend: {
              labels: {
                fontColor: "#D9EEFF"
              }
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    fontColor: "#D9EEFF",
                    beginAtZero: true
                  }
                }
              ],
              xAxes: [
                {
                  ticks: {
                    fontColor: "#D9EEFF",
                    beginAtZero: true
                  }
                }
              ]
            }
          }
        });
      }
    }

    return () => {
      mounted = false;
    };
  }, [chartRef, data]);

  return <canvas id="chart" ref={chartRef} />;
}
