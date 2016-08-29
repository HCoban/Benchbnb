export const fetchBenches = (success) => {
  $.ajax({
    type: "GET",
    url: "api/benches",
    success,
    error: () => console.log("request error")
  });
};
