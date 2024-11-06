import { IUser } from '../../types/types';
import user_logo from '../../assets/User_logo.svg';

type IMainProps = {
  users: IUser[];
};

const Main = ({ users }: IMainProps) => {
  return (
    <>
      <header>
        <h1 className="title">User To-Do Table</h1>
        <h2 className="subTitle">User task table for effective planning</h2>
      </header>
      <main>
        <div className="table_wrapper">
          <table className="table">
            <thead>
              <tr className="table_header">
                <th className="id_column_title table_header_text">#</th>
                <th className="user_column_title table_header_text">
                  username
                </th>
                <th className="todoCount_column_title table_header_text">
                  to-do count
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="table_row" key={user.id}>
                  <td className="id_column">{user.id}</td>
                  <td className="user_column">
                    <div className="user_column_data">
                      <div className="user_avatar_wrapper">
                        <img
                          src={user_logo}
                          alt="User Avatar"
                          className="user_avatar"
                        />
                      </div>
                      <div className="user_info">
                        <p className="user_name">{user.name}</p>
                        <a
                          href={`mailto:${user.email}`}
                          target="_blank"
                          rel="noreferrer"
                          className="user_email"
                        >
                          {user.email}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="todoCount_column">{user.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Main;
