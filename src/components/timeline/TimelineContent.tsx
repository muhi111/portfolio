import { timelineData } from "../../data/timelineData";
import TimelineEvent from "./TimelineEvent";

export default function TimelineContent() {
	return (
		<div className="relative">
			{/* 中央の垂直線 */}
			<div className="absolute left-12 top-4 h-full w-0.5 bg-gray-200" />

			{/* タイムラインイベント */}
			<div className="space-y-12">
				{timelineData.map((event) => (
					<TimelineEvent
						key={event.id}
						year={event.year}
						month={event.month}
						title={event.title}
						description={event.description}
						icon={event.icon}
						type={event.type}
					/>
				))}
			</div>
		</div>
	);
}
