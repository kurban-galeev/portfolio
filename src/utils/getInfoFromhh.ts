export const getInfoFromHH = async () => {
  try {
    const res = await fetch(
      "https://api.hh.ru/resumes/720ccd41ff08cee45c0039ed1f66534b6c324f",
      {
        mode: "no-cors",
        headers: {
          "User-Agent": "api-test-agent",
          "Content-Type": "application/json",
        },
      }
    );
    return res.json();
  } catch (e) {
    alert(e);
  }
};
