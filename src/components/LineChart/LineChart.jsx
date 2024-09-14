import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const subjectMarksData = [
        { id: 1, name: "John", math: 72, physics: 78, chemistry: 85 },
        { id: 2, name: "Alice", math: 85, physics: 88, chemistry: 90 },
        { id: 3, name: "Bob", math: 90, physics: 92, chemistry: 89 },
        { id: 4, name: "David", math: 68, physics: 74, chemistry: 72 },
        { id: 5, name: "Emma", math: 75, physics: 80, chemistry: 78 },
        { id: 6, name: "Grace", math: 88, physics: 90, chemistry: 92 },
        { id: 7, name: "Henry", math: 91, physics: 85, chemistry: 87 },
        { id: 8, name: "Ivy", math: 77, physics: 82, chemistry: 79 },
        { id: 9, name: "Jack", math: 82, physics: 87, chemistry: 84 },
        { id: 10, name: "Lily", math: 95, physics: 93, chemistry: 96 }
      ];

    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;