function clicker() {
    const cut = String(document.getElementById("customer").value).trim();
    const rate = parseFloat(document.getElementById("rate").value);
    const gst = parseInt(document.getElementById("gst").value);
    const qty = parseInt(document.getElementById("qty").value);
    const product = document.getElementById("product").value;
    const hsn = document.getElementById("hsn").value;
    const address = document.getElementById("address").value;
    const customer = cut[0].toUpperCase().concat(cut.slice(1).toLowerCase())
    

    const total = (rate*qty);
    const tax_amount = (((rate*qty)*100)/(100+gst)).toFixed(2);
    const gst_amount = (total - tax_amount).toFixed(2);

    const date = new Date();


    document.getElementsByClassName("customer_i")[0].innerHTML = customer;
    document.getElementsByClassName("customer_i")[1].innerHTML = customer;
    document.getElementsByClassName("address_i")[0].innerHTML = address;
    document.getElementsByClassName("address_i")[1].innerHTML = address;

    document.getElementsByClassName("rate_i")[0].innerHTML = rate;
    document.getElementsByClassName("qty_i")[0].innerHTML = qty;
    document.getElementsByClassName("gst_i")[0].innerHTML = gst;

    document.getElementsByClassName("tax_a")[0].innerHTML = tax_amount;
    document.getElementsByClassName("gst_a")[0].innerHTML = gst_amount;
    document.getElementsByClassName("total")[0].innerHTML = total;
    document.getElementsByClassName("tax_a")[1].innerHTML = tax_amount;
    document.getElementsByClassName("gst_a")[1].innerHTML = gst_amount;
    document.getElementsByClassName("total")[1].innerHTML = total;

    document.getElementById("product_i").innerHTML = product;
    document.getElementById("hsn_i").innerHTML = hsn;
    document.getElementById("datex").innerHTML = date.toDateString().slice(4);

    document.getElementById("formx").style.display = 'none' ;
    document.getElementById("invoice").style.display = 'block';

}