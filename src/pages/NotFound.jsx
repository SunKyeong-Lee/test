import styled from "styled-components";
import SmsFailedOutlinedIcon from "@mui/icons-material/SmsFailedOutlined";
import MyButton from "../style/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <SmsFailedOutlinedIcon />
      <div>
        <div>404 ERROR</div>
        <div>
          페이지를 찾을 수 없습니다. <br />
          존재하지 않는 주소를 입력하셨거나 <br />
          요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
        </div>
        <MyButton
          onClick={() => {
            navigate("/");
          }}
        >
          메인으로 가기
        </MyButton>
        <MyButton
          onClick={() => {
            navigate(-1);
          }}
        >
          뒤로가기
        </MyButton>
      </div>
    </Wrap>
  );
};

export default NotFound;

const Wrap = styled.div`
  min-height: calc(100vh - 236px); // 236px = 푸터 높이 + 네브 높이
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 11rem;
    height: 11rem;
    color: #ced4da;
    margin-right: 3rem;
  }
  div {
    &:first-child {
      font-size: 3rem;
      font-weight: bold;
    }
  }
  button {
    margin: 2rem 1rem 1rem 0;
    font-weight: bold;
  }
`;
