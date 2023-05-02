export const BarChartData = [
    [
      "Element",
      "Density",
      { role: "style" },
      {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
      },
    ],
    ["Copper", 8.94, "#b87333", null],
    ["Silver", 10.49, "blue", null],
    ["Gold", 25, "gold", null],
  ];
  
  export const BarChartOptions = {
    title: "",
    width: 600,
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };