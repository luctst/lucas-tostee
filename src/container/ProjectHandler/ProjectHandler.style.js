import styled from "styled-components";
import Main from "../../styles/layout/Main";

const MainProject = styled(Main)`
	section:first-of-type {
		margin-top: 2.5em;

		form {
			width: 100%;

				input {
					width: inherit;
					height: 1.3em;
					padding: .375rem .75rem;
					font-size: 1rem;
					font-weight: 400;
					line-height: 1.5;
					color: #495057;
					background-color: #fff;
					background-clip: padding-box;
					border: 1px solid #ced4da;
					border-radius: .25rem;
					transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
				}
		}
	}

	section {
		display: flex;
		flex-wrap: wrap;
	}
`;

export default MainProject;
