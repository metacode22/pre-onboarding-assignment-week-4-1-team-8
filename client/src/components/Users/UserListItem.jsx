import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUserDetail, getUsersAccount } from '../../lib/apis';
import { palette } from '../../styles';

function UserListItem({ user }) {
  const {
    id,
    uuid,
    name,
    email,
    gender_origin: genderOrigin,
    birth_date: birthDate,
    phone_number: phoneNumber,
    last_login: lastLogin,
    created_at: createdAt,
  } = user;

  const [allowMarketingPush, setAllowMarketingPush] = useState(false);
  const [accountNumber, setAccountNumber] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const fetchUserDetail = async uuid => {
      const [allowMarketingPush = false, isActive = false] =
        await getUserDetail(uuid);
      const accountNumber = await getUsersAccount(id);

      setAllowMarketingPush(allowMarketingPush);
      setAccountNumber(accountNumber);
      setIsActive(isActive);
    };

    fetchUserDetail(uuid);
  }, []);

  return (
    <TableWrap>
      <tbody>
        <TR>
          <TD>고객명</TD>
          <td>{name}</td>
          <TD>보유 중인 계좌 수</TD>
          <td>{accountNumber}</td>
        </TR>
        <TR>
          <TD>이메일</TD>
          <td>{email}</td>
          <TD>주민등록상 성별코드</TD>
          <td>{genderOrigin}</td>
        </TR>
        <TR>
          <TD>생년월일</TD>
          <td>{birthDate?.slice(0, 10)}</td>
          <TD>휴대폰 번호</TD>
          <td>{phoneNumber}</td>
        </TR>
        <TR>
          <TD>최근 로그인</TD>
          <td>{lastLogin?.slice(0, 10)}</td>
          <TD>혜택 수신 동의 여부</TD>
          <td>{allowMarketingPush ? 'YES' : 'NO'}</td>
        </TR>
        <TR>
          <TD>활성화 여부</TD>
          <td>{isActive ? 'YES' : 'NO'}</td>
          <TD>가입일</TD>
          <td>{createdAt?.slice(0, 10)}</td>
        </TR>
      </tbody>
    </TableWrap>
  );
}

export default UserListItem;

const TableWrap = styled.table`
  margin: 16px auto;
  width: 80%;
  border: 1px solid ${palette.black};
  text-align: center;
`;

const TR = styled.tr`
  border: 1px solid ${palette.black};

  & > td {
    padding: 2px;
  }
`;

const TD = styled.td`
  border: 1px solid ${palette.black};
  background-color: ${palette.shallowGray};
`;
