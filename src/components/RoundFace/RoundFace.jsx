import React from "react";
import themeColor from "../../commons/style/themes/default";
import { EmojiSpace, RoundImoji } from "./styled";
import { ReactComponent as FACE_SMILE } from "../../assets/images/face_미소.svg";
import { ReactComponent as FACE_CUTE } from "../../assets/images/face_깜찍.svg";
import { ReactComponent as FACE_FUN } from "../../assets/images/face_신남.svg";
import { ReactComponent as FACE_SADNESS } from "../../assets/images/face_슬픔.svg";
import { ReactComponent as FACE_THINK } from "../../assets/images/face_머엉.svg";
import { ReactComponent as FACE_SHY } from "../../assets/images/face_수줍.svg";
import { ReactComponent as FACE_RIDICULE } from "../../assets/images/face_썩소.svg";
import { ReactComponent as FACE_SPARE } from "../../assets/images/face_여유.svg";
import { ReactComponent as FACE_LAUGH } from "../../assets/images/face_웃음.svg";
import { ReactComponent as FACE_PANIC } from "../../assets/images/face_당황.svg";

function RoundFace() {
	return (
		<>
			<EmojiSpace>
				<RoundImoji>
					<FACE_SMILE
						width="240px"
						height="240px"
						style={{ position: "absolute", left: "-60px", top: "40px" }}
						fill={themeColor.palette.green}
					/>
				</RoundImoji>

				<RoundImoji>
					<FACE_CUTE
						width="100px"
						height="100px"
						style={{ position: "absolute", left: "248px", bottom: "233px" }}
						fill={themeColor.palette.yellow}
					/>
				</RoundImoji>

				<RoundImoji>
					<FACE_FUN
						width="180px"
						height="180px"
						style={{ position: "absolute", left: "104px", bottom: "-55px" }}
						fill={themeColor.palette.blue}
					/>
				</RoundImoji>

				<RoundImoji>
					<FACE_SADNESS
						width="120px"
						height="120px"
						style={{ position: "absolute", left: "384px", top: "220px" }}
						fill={themeColor.palette.orange}
					/>
				</RoundImoji>

				<RoundImoji>
					<FACE_THINK
						width="120px"
						height="120px"
						style={{ position: "absolute", right: "600px", top: "-40px" }}
						fill={themeColor.palette.pink}
					/>
				</RoundImoji>

				<RoundImoji>
					<FACE_SHY
						width="60px"
						height="60px"
						style={{ position: "absolute", right: "500px", top: "300px" }}
						fill={themeColor.palette.green}
					/>
				</RoundImoji>

				<RoundImoji>
					<FACE_RIDICULE
						width="60px"
						height="60px"
						style={{ position: "absolute", left: "660px", bottom: "125px" }}
						fill={themeColor.palette.red}
					/>
				</RoundImoji>

				<RoundImoji>
					<FACE_SPARE
						width="100px"
						height="100px"
						style={{ position: "absolute", right: "300px", bottom: "300px" }}
						fill={themeColor.palette.pink}
					/>
				</RoundImoji>

				<RoundImoji>
					<FACE_LAUGH
						width="200px"
						height="200px"
						style={{ position: "absolute", right: "-30px", bottom: "30px" }}
						fill={themeColor.palette.yellow}
					/>
				</RoundImoji>

				<RoundImoji>
					<FACE_PANIC
						width="180px"
						height="180px"
						style={{ position: "absolute", right: "160px", top: "70px" }}
						fill={themeColor.palette.red}
					/>
				</RoundImoji>

				<RoundImoji>
					<FACE_LAUGH
						width="40px"
						height="40px"
						style={{ position: "absolute", left: "650px", top: "140px" }}
						fill={themeColor.palette.red}
					/>
				</RoundImoji>

				<RoundImoji>
					<FACE_PANIC
						width="60px"
						height="60px"
						style={{ position: "absolute", left: "-15px", top: "422px" }}
						fill={themeColor.palette.pink}
					/>
				</RoundImoji>

				<RoundImoji>
					<FACE_CUTE
						width="60px"
						height="60px"
						style={{ position: "absolute", right: "-10px", top: "402px" }}
						fill={themeColor.palette.blue}
					/>
				</RoundImoji>

				<RoundImoji>
					<FACE_SMILE
						width="80px"
						height="80px"
						style={{ position: "absolute", right: "500px", bottom: "100px" }}
						fill={themeColor.palette.blue}
					/>
				</RoundImoji>
			</EmojiSpace>

			{/* <Round
				size="XS"
				bgColor="blue"
				style={{ right: "200px", top: "-10px" }}
			></Round>
			<Round
				size="XL"
				bgColor="yellow"
				style={{ right: "-20px", bottom: "20px" }}
			></Round> */}
		</>
	);
}

export default RoundFace;
