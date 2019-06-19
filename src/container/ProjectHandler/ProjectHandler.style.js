import styled from "styled-components";
import Main from "../../styles/layout/Main";

const MainProject = styled(Main)`
	.wrapper--search--repos {
		margin: 2.5em 0;

		&--find {
			input {
				width: 97%;
				height: 1.3em;
				padding: .375rem .75rem;
				font-size: 1rem;
				font-weight: 400;
				line-height: 1.5;
				color: #495057;
				background-color: ${props => props.disabled ? "#e9ecef" : "#fff"};
				background-clip: padding-box;
				border: 1px solid #ced4da;
				border-radius: .25rem;
				transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
			}
		}

		&--filters {
			display: flex;
			margin-top: 1em;
			align-items: center;

			p {
				margin: 0 .5em 0 0;
			}
			div {
				margin-right: 1em;
			}
		}
	}

	p {
		text-align: right;
		margin: 0 0 .5em 0;

		a {
			font-size: 11px;
			text-decoration: none;
		}
	}

	.wrapper--list--repos {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;

export default MainProject;
