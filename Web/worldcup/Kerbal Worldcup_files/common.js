function JSONAction(method, url, d) {
  return $.ajax(url, {
    type: method,
    data: JSON.stringify(d),
    contentType: "application/json",
  }).fail(function (d) {
    if (d.responseText == undefined) toastr.error("Connect error");
    else if (d.responseText == "") toastr.error(d.statusText);
    else toastr.error(d.responseText);
  });
}
