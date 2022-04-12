const axios = require("axios");
const cheerio = require("cheerio");

const getHTML = async (keyword) => {
  try {
    const html = (
      await axios.get(
        `https://www.jobkorea.co.kr/Search/?stext=cloud=${encodeURI(keyword)}`
      )
    ).data;
    return html;
  } catch (e) {
    console.log(e);
  }
};

const parsing = async (page) => {
  const $ = cheerio.load(page);
  const courses = [];
  const $courseList = $(".course_card_item");

  });

  return courses;
};

const getCourse = async (keyword) => {
  const html = await getHTML(keyword);
  const courses = await parsing(html);
  console.log(courses);
};

getCourse("cloud");
