export async function fetchApi (setStateVariable) {
    const response = await fetch("https://openexchangerates.org/api/latest.json?app_id=");
    const data = await response.json();

    return setStateVariable(data)
}
