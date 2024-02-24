export async function fetchApi (setStateVariable) {
    const response = await fetch("https://openexchangerates.org/api/latest.json?app_id=2c5ad271c49c412887a55d886e14ecde");
    const data = await response.json();

    return setStateVariable(data)
}