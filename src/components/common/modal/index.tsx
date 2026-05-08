import './modal.scss';

interface Props {
	title: string;
	text: TrustedHTML;
	link: string;
	onClose: () => void;
}

export default function Modal({ title, text, link, onClose }: Props) {
	return (
		<>
			<div
				className="modal-overlay"
				onClick={(e) => {
					if (e.target === e.currentTarget) {
						onClose();
					}
				}}
			>
				<div className="modal">
					<div className="modal-content">
						<div className="modal-title">{title}</div>
						<div
							className="modal-text"
							dangerouslySetInnerHTML={{ __html: text }}
						></div>
						<a href={link} target="_blank" className="modal-link">
							Подробнее &#8594;
						</a>
					</div>
					<div
						className="modal-action"
						onClick={() => {
							onClose();
						}}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line
								x1="6"
								y1="6"
								x2="18"
								y2="18"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
							/>
							<line
								x1="18"
								y1="6"
								x2="6"
								y2="18"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					</div>
				</div>
			</div>
		</>
	);
}
