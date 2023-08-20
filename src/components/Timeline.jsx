import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Header from "./Header";

function Timeline(props) {
  return (
    <div
      className="flex flex-col md:flex-row justify-center my-20"
      id={props.id}
    >
      <div className="w-full md:w-7/12">
        <Header>Timeline</Header>
        {timeline.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
