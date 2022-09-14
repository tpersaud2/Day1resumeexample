import ResumeItem from "../components/ResumeItem";

export default function Resume() {
  return (
    <>
      <section>
        <h1>Alvaro Montoro</h1>
        <p>
          Senior Software Engineer with strong experience creating high-quality,
          scalable, and high-performance web applications seeking front-end and
          full stack opportunities.
        </p>
      </section>

      <section>
        <h2>EXPERIENCE</h2>
        <h3>athenahealth | Healthcare IT </h3>
        <h4>
          Member of Technical Staff <time>2017</time> - <time>2019</time>
        </h4>

        <ul>
          {" "}
          <li>
            Developed widgets using React and Less to display patient
            information.
          </li>
          <li>
            Created design specifications, participated in design and code
            reviews.
          </li>
          <li>
            Worked on the design and initial development of a new platform to
            import medical documents.
          </li>
          <li>
            Developed a Kotlin micro-service to generate XML documents based on
            a government-compliant architecture (CCDA).
          </li>{" "}
        </ul>
      </section>

      <section>
        <h3>General Motors | Cadillac.Com Team</h3>{" "}
        <h4>
          Web Developer <time>2015</time> - <time>2017</time>
        </h4>
        <ul>
          {" "}
          <li>
            Developed new components for the award-winning website Cadillac.com
            and its mobile version.
          </li>{" "}
          <li>
            Worked with stakeholders to refine and negotiate product requirement
            specifications, functional specifications, and product vision and
            direction.
          </li>{" "}
          <li>
            Designed a web component that reduced page load speed by over 15%,
            improving SEO and accessibility, and saving authoring expenses.
          </li>{" "}
          <li>
            Organized and participated in events representing GM at volunteering
            opportunities and competitions.
          </li>{" "}
        </ul>
      </section>

      <section>
        <h3>MicroAssist | Information Technology and Services</h3>
        <h4>
          PHP Developer <time>2014</time> - <time>2015</time>
        </h4>
        <ul>
          {" "}
          <li>
            Designed and developed different web projects with a focus on
            accessibility, including new features and website enhancements.
          </li>{" "}
          <li>
            Created and integrated an automated mail system with 3rd party APIs.
          </li>{" "}
          <li>
            Developed and collaborated in the translation project of the ITTD
            website for the Texas Department of Public Safety.
          </li>{" "}
        </ul>{" "}
      </section>

      <section>
        <h3>Hewlett-Packard | Content & Digital Asset Management</h3>
        <h4>
          IT Engineer <time>2011</time> - <time>2014</time>
        </h4>
        <ul>
          {" "}
          <li>
            Developed two internal content management systems (related to HP’s
            products documentation) with over three million monthly visitors.
          </li>{" "}
          <li>
            Coordinated efforts with an overseas team, applying Agile
            methodologies to ensure on-time, on-spec project delivery.
          </li>
          <li>
            Improved different batch jobs performance, reducing execution time
            by over 50%, and eliminating downtime.
          </li>{" "}
        </ul>
      </section>
    </>
  );
}
