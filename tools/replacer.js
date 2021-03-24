module.exports = (data, html) => {
    let output = html.replace(/%{IMAGE}%/g, data.image);
    output = output.replace(/%{NAME}%/g, data.productName);
    output = output.replace(/%{QUANTITY}%/g, data.quantity);
    output = output.replace(/%{PRICE}%/g, data.price);
    output = output.replace(/%{FROM}%/g, data.from);
    output = output.replace(/%{DESCRIPTION}%/g, data.description);
    output = output.replace(/%{NUTRIENTS}%/g, data.nutrients);
    output = output.replace(/%{NOT_ORGANIC}%/g, data.organic ? '' : 'not-organic');
    output = output.replace(/%{ID}%/g, data.id);
    return output;
};
