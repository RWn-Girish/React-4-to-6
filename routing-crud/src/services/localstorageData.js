export const getData = () => {
    return JSON.parse(localStorage.getItem('Employees'))  || [];
}