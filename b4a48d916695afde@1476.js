import define1 from "./26670360aa6f343b@209.js";
import define2 from "./450051d7f1174df8@255.js";
import define3 from "./701d3341aea4345e@298.js";
import define4 from "./b8901a674fce0b00@114.js";

function _1(md){return(
md`# The Demographics of International Students
Akshath Rao <br />
Cheeson Lau<br />
Chris Yu<br />
Nikhil Khanal<br />
CSE 412 AB<br />`
)}

function _img(FileAttachment){return(
FileAttachment("countries_inPixio.jpg").image()
)}

function _3(md){return(
md`Source: https://images.app.goo.gl/ggQ2oVKEST4vHLrg9`
)}

function _4(md){return(
md`## Introduction

International Students are a massive cog in the greater system that accounts for college students in the United States. They come from a diverse panel of countries, and pursue an even wider variety of disciplines. According to UW, they account for 14.2% of UW's student body, almost 10% higher than the national average. Yet, there seems to be a gap between local and international students when it comes to social interaction and a general understanding of each other's similarities & differences. By providing various figures and visualizations describing the international student experience, we aim to bridge this gap.

In exploring this topic, we came up with several key questions that we were looking to solve regarding international students and their academic patterns.

**Question 1**

1.) How has the international student demographic changed over time? How has the distribution of majors and scores changed over this span?

**Question 2:**

2.) How do the majors of international students vary across different countries of origin?

**Question 3:**

3.) Where do international students get their tuition from?

**Question 4**

4.) Which cities do international students tend to attend for school?


By answering these questions, we open a window to see aspects of the international student experience. This is valuable for a number of reasons.`
)}

function _5(md){return(
md`## Societal Relevance
International Students are not only important to their own personal success by to the success of all American institutions. The American college going population is not growing the way it was in the past, particularly in certain regions where it is projected to increase from at best 6% to at worst 0.2% (National Center for Education Statistics). International Students, not only are important to keeping colleges full but keeping all types of institutions going.
</br>
</br>
In a financial and economic stanpoint, International students bring in over $39 billion dollars to the national economy with 400,000 jobs according th the National Center for Education Statistics. 
</br>
</br>
Unfortunately, as times change, the difficulty for students also does and as a new decade is turnt, our group decided to deep dive into the different demographics of International students to assess the diversity, and different hardships they could face as they try to find an education abroad.`
)}

function _6(md){return(
md`## Datasets

There are several datasets that we used when digging deeper into the information behind international student enrollment.

**<ins>major_origin_wide and major_origin_long</ins>**

**Link:** https://opendoorsdata.org/?download=https://opendoorsdata.org/wp-content/uploads/2023/11/Census_Field-of-Study-and-Place-of-Origin_OD23-1.xlsx

**Description:** The first datasets come from a file containing information on the fields of study international students tend to choose, from a list of major and relevant countries. This data displays the number of students from a country enrolled in a particular field, from 2009 to 2022. We chose to use this data to help us to figure out the kind of subjects that intrigue international students the most. There might be some interesting insights you could find by comparing different countries, for example. The data was preprocessed in Excel in order to fix the data format, include more geographical information (regions), and deal with empty data.

<ins>**censusoverallenrolled**</ins>

**Link:** https://opendoorsdata.org/data/international-students/

**Description:** The next dataset from OpenDoorsData provides a list of the leading institutions in the world, ranked, for different institutional focuses in all degrees. There are also data points before some filtration and after filtration, allowing us to compare the datapoints of other schools' who do not have any null values. This dataset also contains a comparative score, called **scoreScaled**, which is a calculated score taken from composite ratings of various aspects of a school. This helps provide us a way to easily compare universities directly and across borders.

<ins>**uworigin**</ins>

**Link:** https://tableau.washington.edu/views/ISS-InternationalStudentsatUW/VisasTable?%3Aembed=y&%3AshowAppBanner=false&%3AshowShareOptions=true&%3Adisplay_count=no&%3AshowVizHome=no

**Description:** These original tableau datasets showed international student at UW from 2014-2024 academic year base on different countries, major field, campus and degree type. We specifically modified a new dataset that called uworigin in Excel that is only has the information of the international student's countries and their studnets number, after modification we converted to csv file by using online converter. We will be comparing this dataset with the studentsOrigin dataset to see the difference between UW international students and the US international students origin and numbers.

<ins>**topUni**</ins>

**Link:** https://opendoorsdata.org/wp-content/uploads/2023/11/Open-Doors-2023_International_Student_Census_Tables.xlsx and https://simplemaps.com/data/us-cities

**Description:** This dataset is created by merging two datasets. The first dataset shows the Institutions in the US Hosting 1,000 or More International Students in 2022/23. The second dataset contains 31120 US cities with latitude and longitude data, which helps use to plot their location on the map. Some cities were missing latitude and longitude data, and we resolved it simply by manually entering the data in Microsoft Excel (just a few cities). 

<ins>**usBoundaries**</ins>

**Link:** N/A

**Description:** This is the dataset used in Lecture 14 - More Maps. It is used to plot the US state map.

<ins>**origin & source_of_fund & field_of_study**</ins>

**Link:** https://www.kaggle.com/datasets/webdevbadger/international-student-demographics

**Description:** This dataset has data on the field of study, funding, origin and even specialization of international students in the US. Examining international student demographics helps educational institutions better understand the diverse backgrounds and requirements of their global student community. This dataset provides insights into a variety of aspects including, gender, marital status, Visa type, origin of country, academic level, and much more`
)}

function _7(md){return(
md`## Average University Score in Each Country `
)}

function _8(md){return(
md`This Graph illustrates some of the Best Universities worldwide, giving us a perspective as to which colleges are areas of interest for International Students. This visualization marks some of the premiere institutions that are located all over the world so we now understand some of the motivations for international students coming into the United States. 

This allows us to gain some insight into how diverse the top universities in the world are. Another key insight we gained was the interest in American industries which seems to be one of the most common trends in the data. With this data we can understand how all of these universities compare with one another.`
)}

function _9(vl,censusoverallenrolled1)
{
  const selector = vl.selectPoint('selected_point')
    // .fields('source_of_fund')
    .on('mouseover')
    .clear('mouseout');
  const scoreScaledmeter = vl.param('ScoreScaled').value(60).bind(vl.slider(60, 99, 1).name('Pick a Minimum Score  ')); 
  
  const mainGraph = vl.markBar({clip: true, title: "Top Universities Ranked Globally"})
    .params(selector,scoreScaledmeter)
    .transform(
      
      vl.filter('datum.ScoreScaled > ScoreScaled')
    )
  .data(censusoverallenrolled1)
  .encode(
    vl.x().fieldN('Institution'),
    vl.y().fieldQ('ScoreScaled').title('Average Score for University Scaled to 100')
    
          // .scale({domain: [80,500]})
        // .aggregate('mean')
          .axis({labels:true, ticks: true, grid: true}),
    // 
    vl.color({
  field: "LocationCode",
  type: "nominal",
  scale: {
    scheme: "Sinebow" // You can use any color scheme you prefer
  }
}),
    // vl.tooltip().fieldN('Location'),
    // vl.tooltip().fieldQ('ScoreScaled')
     vl.tooltip([
      {field: 'Location', type: "nominal", title:'Location'},
      {field: 'ScoreScaled', type: 'quantitative', title: 'Score'},
       {field: 'Institution', type: 'nominal', title: 'University'}
    ])
  )

  return mainGraph.render();
  
}


function _10(md){return(
md`## What do International Students Study?

Why This Question: To understand the interest and career direction of international students.

Description of the Visualization: A concatenation of 4 different charts.

Line Chart: This line chart shows the total amount of international students from the selected country from 2010 to 2023. From this graph, we can tell whether people from those countries are getting increasingly more interested to US Universities or not. This chart does not respond to the year slider.

Pie Chart: This pie chart is not entirely correct since our dataset only has data from 30 countries and there are missing data among those 30 countries too. But, we can still get the bigger picture that the vast majority of international students in the US are from South Asia or East Asia. This chart is static and does on respond to the slider and menu because it includes information in all years and all countries in the dataset.

Bar Chart 1: This bar chart shows the number of students in different fields of study from the selected country and year. From this bar chart readers could understand the common career paths and areas of interest. It also compares the diversity of those fields of study.

Bar Chart 2: This bar chart shows the number of all international students in different fields of study. It does not respond to the year menu. From this bar chart readers could understand what fields do most international students study in. It also compares the diversity of those fields of study.`
)}

function _11(vl,major_origin_long,major_origin_wide)
{// Select Country
const country_picked = vl.param('countries').value('China').bind(vl.menu(['Bangladesh', 'Brazil', 'Canada', 'China', 'Colombia', 'France', 'Germany', 'Hong Kong', 'India', 'Indonesia', 'Iran', 'Italy', 'Japan', 'Kenya', 'Kuwait', 'Malaysia', 'Mexico', 'Nepal', 'Nigeria', 'Pakistan', 'Russia', 'Saudi Arabia', 'South Korea', 'Spain', 'Taiwan', 'Thailand', 'Turkey', 'United Kingdom', 'Venezuela', 'Vietnam']).name('Pick a Country  '));

// Select Year
const year_picked = vl.param('years').value(2010).bind(vl.slider(2010, 2023, 1).name('Pick a Year  ')); 

// Line Chart
const major_origin_line = vl.markLine()
  .transform(
    vl.filter('datum.Place_of_Origin == countries')
  )
  .encode(
    vl.x().fieldT('Year'),
    vl.y().fieldQ('Total Students')
  )
  .title({ text: { signal: "'Number of Students from ' + countries + ' from 2010 to 2023'" } })
  .width(300);

// Pie Chart
const major_origin_pie = vl.markArc({ innerRadius: 50 })
  .encode(
    vl.theta().fieldQ('Total Students').title('Total Students'),
    vl.color().fieldN('Region').legend({columns: 1, symbolLimit: 10, title: "Region", orient: 'none', legendX: 680, legendY: 200}),
  )
  .title('Proportion of Students from Different Regions from 2010 to 2023')
  .width(250);

// Bar Chart
const major_origin_bar = vl.markBar()
  .data(major_origin_long)
  .params(country_picked, year_picked)
  .transform(
    vl.filter('datum.Place_of_Origin == countries'),
    vl.filter('datum.Year == years')
  )
  .encode(
    vl.y().fieldN('Field of Study'),
    vl.x().fieldQ('Number')
  )
  .title({ text: { signal: "'Field of Study of Students from ' + countries + ' in ' + years" } })
  .height(300)
  .width(600);

const major_origin_bar2 = vl.markBar()
  .data(major_origin_long)
  .params(year_picked)
  .transform(
    vl.filter('datum.Year == years'),
  )
  .encode(
    vl.y().fieldN('Field of Study'),
    vl.x().fieldQ('Number').scale({domain: [0, 230000]})
  )
  .title({ text: { signal: "'Field of Study of International Students in ' + years" } })
  .height(300)
  .width(600);

// Combine the charts horizontally
const combinedChart1 = vl.hconcat(major_origin_line, major_origin_pie).data(major_origin_wide).params(country_picked, year_picked);
const combinedChart2 = vl.vconcat(combinedChart1, major_origin_bar).params(country_picked, year_picked);
const combinedChart3 = vl.vconcat(combinedChart2, major_origin_bar2).params(country_picked, year_picked)

// Render the combined chart
return combinedChart3.render();}


function _12(md){return(
md`## Which Universities do International Students Go to?

Why this question: To figure out what cities host the most international students, so that we know which cities and states have more diverse campuses.

Description: This is a map of the United States of America, and each circle on the map represents a city with more than 1000 international students. This larger the circle, the more international students in that city. Readers could hover on the map to see the exact number of international students in a city. The color helps the readers to figure out what states are populard destination of international students.`
)}

function _13(vl,usBoundaries,topUni)
{
  const citySelector = vl.selectPoint()
    .fields('City')
    .on('mouseover')
    .clear('mouseout')
    .nearest(true)
  
  const usmap = vl.markGeoshape({fill: '#d3d3d3', stroke: '#A9A9A9'})
  .data(vl.topojson(usBoundaries).feature("states"))

  const points = vl.markCircle()
  .data(topUni)
  .params(citySelector)
  .encode(
    vl.longitude().fieldQ('lng'),
    vl.latitude().fieldQ('lat'),
    vl.size().aggregate('sum').fieldQ('Number').scale({range: [5, 2500]}),
    vl.color().fieldN('State').legend({columns: 14, symbolLimit: 50, orient: 'none', direction: 'horizontal',
                                       legendX: 120, legendY: 840}),
    vl.opacity().if(citySelector, vl.value(1)).value(0.1),
    vl.tooltip([
      {aggregate: 'sum', field: 'Number', type: "quantitative", title:'Number of International Stuents'},
      {field: 'City', type: 'nominal', title: 'City'}
    ])
  )
  
  return vl.layer(usmap, points)
    .project(vl.projection('albersUsa'))
    .width(1000)
    .height(1000).render()}


function _14(md){return(
md`## Diversity in International Students from 2000 to 2023 in Comparison with Degree of Choice

This visualizations has two separate parts. The bar graph marks the different amount of students in each degree, being marked as Graduate, Undergraduate or Other for specializations. The pie chart illustrates the different percentage of students from each country based of the count. The sliders at the bottom allow us to adjust the year of data along with the minimum student value that is required for all countries to have in the bar pie chart. Essentially the bar graph does not account for the country but instead it allows us to understand the whole demographic while the pie chart illustrates the individual country data.`
)}

function _15(vl,origin1)
{
  const year_picked = vl.param('year').value(2000).bind(vl.slider(2000, 2022, 1).name('Pick a Year             ')); 
  const studentsFilter = vl.param('students').value(0).bind(vl.slider(0, 10000, 100).name('Minimum Student Value:  ')); 

  const originGraph = vl.markArc()
  .data(origin1)
  .params(year_picked,studentsFilter)
  .transform(
    vl.filter('datum.year == year'),
    vl.filter('datum.students > students')
    // vl.filter(d => d.students > studentsFilter)
  )
  .encode(
       vl.theta().fieldQ('students').title('Total Students'), // No need to sort theta encoding
    // vl.color().fieldN('origin').title('Country')  
    vl.color({
  field: "origin",
  type: "nominal",
  scale: {
    scheme: "rainbow" // You can use any color scheme you prefer
  }
})
     
,
    // .scale({scheme: 'category20'}).legend({columns: 4, symbolLimit: 121})
    vl.tooltip([ 
      {field: 'students', title: 'Students',type: 'quantitative'},
      {field: 'origin', title: 'Country', type:'nominal'}
    ])
    ) .title({ text:"Origin of International Students"  })
  // .title({ text: { signal: "'Field of Study of International Students in ' + year" } })
  .height(300)
  .width(600)

  const barDegree = vl.markBar()
  .data(origin1)
  .params(year_picked)
  .transform(
    vl.filter('datum.year == year'),
    // vl.filter('datum.students > students')
    // vl.filter(d => d.students > studentsFilter)
  )
  .encode(
    vl.x().fieldN('academic_type').title('Degree Pursued'),
    vl.y().fieldQ('students').title('Number of Students')
  ).title({ text:"Degrees pursued by students"  })
  // return vl.hconcat(barDegree).data(origin1).params(year_picked).render()
  // return vl.hconcat(originGraph).data(origin1).params(year_picked,studentsFilter).render(); // main one

  
return vl.hconcat(barDegree,originGraph).data(origin1).params(year_picked,studentsFilter).render();
}


function _16(md){return(
md`## Where did International Students get tuition from?`
)}

function _17(md){return(
md`Most international students get their tuition from personal sources, as in they have a parent or a guardian to help with majority of it, especially when it comes to the demographics of students that are interested in coming into the United States as international students. This graph illustrates the changes in the number of students over years comparitive to their source of funding, furthermore, the left most bar graph shoes a cumulative sum value that has the total number of students for each of the following sources of funding. With private and government sponsors being at the lowest, it seems that most students have to make it on their own to be able to get an education in the United States which poses as a challenge finanically to a lot of students`
)}

function _18(vl,source_of_fund)
{

  const selector = vl.selectPoint('selected_point')
    .on('mouseover')
    .fields('source_of_fund')
    .clear('mouseout');

  const selector1 = vl.selectMulti('selected_point')
    .fields('source_of_fund')
    .on('mouseover')
    .clear('mouseout');
  
  const barGraph =vl.markArea()
    .params(selector)
  .data(source_of_fund)
  .encode(
    vl.x().fieldT('year'),
    vl.y().fieldQ('students').aggregate('sum').title('Students')
    .scale({ domain: [0, 500000] }),
    vl.color().fieldN('source_of_fund').title('Source of Fund'),
    vl.opacity().if(selector,vl.value(1)).value(0.1),
    // vl.tooltip([{field: 'students',title: 'Students'}]).fieldQ('students').aggregate('sum')
    
   vl.tooltip([ 
      {field: 'students',type: 'quantitative', title: 'Students',aggregate: 'sum'},
        {field: 'source_of_fund',type: 'nominal', title: 'Source of Fund'}
    ])
    
  ).title({ text:"Funding Sources for International Students"  })

  const timeGraph = vl.markBar()
    .params(selector)
  .data(source_of_fund)
  .encode(
    vl.x().fieldN('source_of_fund').title('Source of Fund'),
    vl.y().fieldQ('students').aggregate('sum').title('Students sum over all years'),
    // vl.opacity().if(selector,vl.value(1)).value(0.1),
    // vl.tooltip().fieldQ('students').aggregate('sum').title('students')
      vl.tooltip([ 
      {field: 'students',type: 'quantitative', title: 'Students',aggregate: 'sum'},
        {field: 'source_of_fund',type: 'nominal', title: 'Source of Fund'}
    ])
  ).title({ text:"Source of Fund Distribution amongst International Students"  })
 

  return vl.hconcat(timeGraph,barGraph).render()

}


function _19(md){return(
md`# Conclusion
</br>
Through our research into the topic of International student demographics in America we learnt more about why America is chosen as a destination, with five of the top ten rated schools being in America. Furthermore, we learnt the demographic of students that come into America for education. Since most students have to pay for tuition through their own pocket or family incomes, getting an education in the States is harder for most underprivilleged students. Another common trend seen is the dip of all students in the years 2020 because of the pandemic. Another key detail to look at is the growth of the tech sector alongside the demographic of students coming in. We saw a majority of students specializing in STEM subjects primarily computer science or engineering when they came into the United States. This also correlates to where these students will work and where the universities are located. There is a greater density of students in larger cities with tech jobs and opportunities showing how active and important international students are to the economy of the United States`
)}

function _20(md){return(
md`## Reflection

We learned how to design and implement interactive visualization with Vega-Lite. We also understand the importance of having a quality dataset so that less preprocessing needs to be done before importing it to observable notebook. When it came to making many of the graphs interactive such as the international student population density map, we found it hard to be able to make a map when we had only city names, so we had to merge different datasets with locations to the city names to make a cohesive visual. We learnt many problem solving skills in making datasets more readable, be it formatting wise or making our visualizations more visually appealing. There was also teamwork when some members were able to get a concept working in code, we were able to piggy back and understand how to use some features such as dropdown menus, tooltips, step-bars and many more things. There are limitations and strengths to our graphs, since we had limited time we were able to evaluate a small set of questions but with time and possible a bigger specialization, even the most niche topics can be explored with the help of visualizations and some math.

## Roles and Responsibilities

Cheeson: Created visualizations to answer "How do the majors of international students vary across different countries of origin?" and "Which cities do international students tend to attend for school?".

Chris: Created visualization to answer "Diversity in International Students from 2000 to 2023 in Comparison with Degree of Choice".

Akshath: Created visualizations to answer "Where do international students get their tuition from?" and "Average University Score in Each Country".

Nikhil: Authored written sections, organized notebook, including flow and ordering, and consolidating datasets to use. Contextualized visualizations within greater scope of project.`
)}

function _21(md){return(
md`# Appendix
Imports`
)}

function _26(md){return(
md`DataBases:`
)}

function _27(md){return(
md`News Articles for Topic Research:
https://www.forbes.com/sites/marvinkrislov/2019/03/22/why-international-students-are-good-for-colleges-universities-and-america/?sh=482d2c01f496`
)}

function _major_origin_wide(FileAttachment){return(
FileAttachment("major_origin_wide-2.csv").csv()
)}

function _major_origin_long(FileAttachment){return(
FileAttachment("major_origin_long@5.csv").csv()
)}

function _uworigin(FileAttachment){return(
FileAttachment("uworigin.csv").csv()
)}

function _censusoverallenrolled(FileAttachment){return(
FileAttachment("2023 QS World University Rankings.csv").csv()
)}

function _censusoverallenrolled1(censusoverallenrolled){return(
censusoverallenrolled.sort((a, b) => b.ScoreScaled - a.ScoreScaled).map((d, i) => ({ ...d, rank: i + 1 }))
)}

function _usBoundaries(FileAttachment){return(
FileAttachment("us-10m.json").json()
)}

function _topUni(FileAttachment){return(
FileAttachment("TopUniversity@5.csv").csv()
)}

function _source_of_fund(FileAttachment){return(
FileAttachment("source_of_fund.csv").csv()
)}

function _origin1(FileAttachment){return(
FileAttachment("newOrigin.csv").csv()
)}

function _field_of_study(FileAttachment){return(
FileAttachment("field_of_study.csv").csv()
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["2023 QS World University Rankings.csv", {url: new URL("./files/6ed1867f4a44458f1902e0735ac881220cc76838b531cb0c8ddf8bed7edd88273f76052081498ae0c73d88f01dd181dda3df588f02f3a9a3d66b48cceda0f660.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["field_of_study.csv", {url: new URL("./files/89912be829865a04db77ebedf7e1d789390b89299235d611f5a57ef10235736149c5c3355fd9f830fe528bae0001d32256019aeec49adf4122e8aa89f5398d39.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["uworigin.csv", {url: new URL("./files/efc201ccb032983ebbf640c0ba371b80f1be47ea86e08490ec09351fe7f0b4e1cc9b6b42d8af3059fe2f982020f4c257d0fb2aad8543683b97ad757365264be7.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["source_of_fund.csv", {url: new URL("./files/933b5aee7bacf3d7afe127e3123671a790a1b757c102f5ffe4d43529375abc6fb6817279fe40cd756fd4f5ad63c6d572a8dc0360e08baf45bd10ac4ff69e2bd6.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["major_origin_wide-2.csv", {url: new URL("./files/20f747ad46c4e451741e90fa40754a3ac0bf95f94dbf1f0f6b550700787430063d0d148e5bb8e9f31bdac1d5d4b7a09bae9138f8a82698013f0213843b867a1a.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["us-10m.json", {url: new URL("./files/99c97a4b453728e39bf3d4b0cbddd665fb30e9b0086d00feaadb59fde4bd638cce851b0a56274768e4527790da37476b7d37d400f1bb227d062546a20d11c37c.json", import.meta.url), mimeType: "application/json", toString}],
    ["TopUniversity@5.csv", {url: new URL("./files/b3619df073fc83c0e11d46dd864b9707f7514e8ee22dbb83c154bf1186fd8142e666c4fb59acbbb8fef31836a7fc8f5ac3f2dfce8e22794fcb17ee88801c5ea4.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["newOrigin.csv", {url: new URL("./files/71665e2afd84b9fb761d1367970aa564d3e8476f1864a94616a0b130c0a1cecae2da3391a59afd16836e3fc75ae4dfac12ac147fd6d6ea74a15c04d619ea470c.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["major_origin_long@5.csv", {url: new URL("./files/c8e388c758437db7b9a906452aebe4f459b839756a8dfa5975c4fbfff5068b177857888c821b57aa64af3947d96e4f5088ea36d5b89a8aecdc4b038a7a9ef5de.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["countries_inPixio.jpg", {url: new URL("./files/a106c8f94061c36a256b148d2f86224e24e4fb34fcbd7ca436bf6c6ee9363c9bda792fffd90d6d6bf955116936d1d48e185320502545026102870e1464074284.png", import.meta.url), mimeType: "image/png", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("img")).define("img", ["FileAttachment"], _img);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["vl","censusoverallenrolled1"], _9);
  main.variable(observer()).define(["md"], _10);
  main.variable(observer()).define(["vl","major_origin_long","major_origin_wide"], _11);
  main.variable(observer()).define(["md"], _12);
  main.variable(observer()).define(["vl","usBoundaries","topUni"], _13);
  main.variable(observer()).define(["md"], _14);
  main.variable(observer()).define(["vl","origin1"], _15);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer()).define(["md"], _17);
  main.variable(observer()).define(["vl","source_of_fund"], _18);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer()).define(["md"], _20);
  main.variable(observer()).define(["md"], _21);
  const child1 = runtime.module(define1);
  main.import("vl", child1);
  const child2 = runtime.module(define2);
  main.import("Scrubber", child2);
  const child3 = runtime.module(define3);
  main.import("printTable", child3);
  const child4 = runtime.module(define4);
  main.import("toc", child4);
  main.variable(observer()).define(["md"], _26);
  main.variable(observer()).define(["md"], _27);
  main.variable(observer("major_origin_wide")).define("major_origin_wide", ["FileAttachment"], _major_origin_wide);
  main.variable(observer("major_origin_long")).define("major_origin_long", ["FileAttachment"], _major_origin_long);
  main.variable(observer("uworigin")).define("uworigin", ["FileAttachment"], _uworigin);
  main.variable(observer("censusoverallenrolled")).define("censusoverallenrolled", ["FileAttachment"], _censusoverallenrolled);
  main.variable(observer("censusoverallenrolled1")).define("censusoverallenrolled1", ["censusoverallenrolled"], _censusoverallenrolled1);
  main.variable(observer("usBoundaries")).define("usBoundaries", ["FileAttachment"], _usBoundaries);
  main.variable(observer("topUni")).define("topUni", ["FileAttachment"], _topUni);
  main.variable(observer("source_of_fund")).define("source_of_fund", ["FileAttachment"], _source_of_fund);
  main.variable(observer("origin1")).define("origin1", ["FileAttachment"], _origin1);
  main.variable(observer("field_of_study")).define("field_of_study", ["FileAttachment"], _field_of_study);
  return main;
}
