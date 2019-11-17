export const days: Array<Record<string, string | number>> = [
    { day: "" },
    { day: "" },
    { day: "" },
    { day: "" },
    { day: "" },
    { day: 1 },
    { day: 2 },
    { day: 3 },
    { day: 4 },
    { day: 5 },
    { day: 6 },
    { day: 7 },
    { day: 8 },
    { day: 9 },
    { day: 10 },
    { day: 11 },
    { day: 12 },
    { day: 13 },
    { day: 14 },
    { day: 15 },
    { day: 16 },
    { day: 17 },
    { day: 18 },
    { day: 19 },
    { day: 20 },
    { day: 21 },
    { day: 22 },
    { day: 23 },
    { day: 24 },
    { day: 25 },
    { day: 26 },
    { day: 27 },
    { day: 28 },
    { day: 29 },
    { day: 30 },
    { day: 31 },
    { day: "" },
    { day: "" },
    { day: "" },
    { day: "" },
    { day: "" }
];

export const months: string[] = [
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

export const years: Array<Record<string, string>> = getYears();

function getYears() {
    const startYear = 1970;
    const endYear = new Date().getFullYear();
    const result = [
        { years: "" },
        { years: "" },
        { years: "" },
        { years: "" },
        { years: "" }
    ];
    const lastElem = [
        { years: "" },
        { years: "" },
        { years: "" },
        { years: "" },
        { years: "" }
    ];

    for (let i = startYear; i <= endYear; i++) {
        result.push({ years: String(i) });
    }

    return result.concat(lastElem);
}
