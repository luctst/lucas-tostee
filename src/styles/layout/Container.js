import styled from "styled-components";

const GlobalContainer = styled.div`
	display: grid;
	grid-template-columns: .6fr 2fr;
	grid-template-rows: auto 1fr;
	height: 100vh;
	max-height: 100vh;
	max-width: 100%;
	padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
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

export const ContainerFluid = styled(GlobalContainer)``;
