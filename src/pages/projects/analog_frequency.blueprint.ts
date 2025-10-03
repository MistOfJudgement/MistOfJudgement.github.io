import { Blueprint, PageConfig } from "../../architect";
import { YoutubeThumbnail } from "../../components/YoutubeThumbnail";

interface AnalogFrequencyDetectorData {
	youtubeUrl: string;
	youtubeTitle: string;
}
const AnalogFrequencyDetectorContent: Blueprint<AnalogFrequencyDetectorData> = (props) => {
	return `
    <h2>Problem & Purpose</h2>
    <p>I took an analog electronics class in high school and the final project
	was to demonstrate that we could recreate a schematic that could sort of filter
	certain frequencies. We were asked to demonstrate this on the circuit simulator
	<a href="https://www.falstad.com/circuit/circuitjs.html">Falstad</a> but I
	had the opportunity to just build the circuit myself.</p>

    <h2>Technical Implementation</h2>
    <p>Unfortunately, I don't remember the schematic, but I can assume it was a
	set of 3 band pass filters for low, mid, and high frequencies. Each could modulated
	by a potentiometer.</p>

	<p>I couldn't upload the video as a submission so I uploaded it to YouTube.</p>
	${YoutubeThumbnail({
		url: props.youtubeUrl,
		title: props.youtubeTitle,
	})}

    `;
};

const analogFrequencyDetectorData: AnalogFrequencyDetectorData = {
	youtubeUrl: "https://www.youtube.com/watch?v=t7b9YMaFg1c",
	youtubeTitle: "Analog Frequency Detector Video",
};

// Export complete page configuration
export const AnalogFrequencyDetectorPage: PageConfig<AnalogFrequencyDetectorData> = {
	filename: "analog_frequency_detector.html",
	title: "Analog Frequency Detector",
	contentBuilder: AnalogFrequencyDetectorContent,
	contentData: analogFrequencyDetectorData,
	navLabel: "Analog Frequency Detector",
	navOrder: "b-2021-01-analog-frequency-detector",
	navCategory: "Projects",
	projectInfo: {
		
		title: "Analog Frequency Detector",
		descriptions: ["For a high school analog electronics class"],
		yt: {
			url: analogFrequencyDetectorData.youtubeUrl,
			title: analogFrequencyDetectorData.youtubeTitle,
		},
		projectPageHref: "./analog_frequency_detector.html",
	},
};
