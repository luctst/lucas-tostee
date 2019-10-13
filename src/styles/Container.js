import styled from "styled-components";

const GlobalContainer = styled.div`
	padding: 0 15px;
	margin: 0 auto;
`;

export const Container = styled(GlobalContainer)`
	@media (min-width: 576px) {
		max-width: 540px;
	}

	@media (min-width: 768px) {
		max-width: 720px;
	}

	@media (min-width: 992px) {
		max-width: 960px;
	}

	@media (min-width: 1200px) {
		max-width: 1140px;
	}
`;
