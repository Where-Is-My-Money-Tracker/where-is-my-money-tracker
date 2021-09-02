export default function insertChartData(object) {
    const data = {
        labels: Object.keys(object),
        datasets: [{
            label: 'Yo Money',
            data:  Object.values(object),
            backgroundColor: [
                'rgba(88, 47, 14, 1)',
                'rgba(101, 109, 74, 1)',
                'rgba(182, 173, 144, 1)',
                'rgba(65, 72, 51, 1)',
                'rgba(166, 138, 100, 1)',
                'rgba(164, 172, 134, 1)',
                'rgba(127, 79, 36, 1)',
                'rgba(194, 197, 170, 1)',
                'rgba(147, 102, 57, 1)',
                'rgba(51, 61, 41, 1)'
            ],
            borderColor: [
                'rgba(88, 47, 14, 1)',
                'rgba(101, 109, 74, 1)',
                'rgba(182, 173, 144, 1)',
                'rgba(65, 72, 51, 1)',
                'rgba(166, 138, 100, 1)',
                'rgba(164, 172, 134, 1)',
                'rgba(127, 79, 36, 1)',
                'rgba(194, 197, 170, 1)',
                'rgba(147, 102, 57, 1)',
                'rgba(51, 61, 41, 1)'
            ],
            borderWidth: 1,
            height: '50%'
        }]
    }
    return data;
}