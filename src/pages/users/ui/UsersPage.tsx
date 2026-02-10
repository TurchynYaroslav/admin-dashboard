import { UserModal, useManageUsers } from "../../../features/users/index";
import { Button, Table } from "../../../shared/ui";
import { Header } from "../../../widgets";

export const UsersPage = () => {
  const {
    users,
    columns,
    isModalOpen,
    selectedUser,
    openModalForCreate,
    handleSave,
    closeModal,
  } = useManageUsers();

  return (
    <div className="relative w-full h-full">
      <Header>
        <div className="">
          <h1>Users</h1>
        </div>
        <div className="">
          <Button onClick={openModalForCreate} variant="create">
            Create
          </Button>
        </div>
      </Header>
      <Table data={users} columns={columns} getRowKey={(user) => user.id} />
      <UserModal
        isOpen={isModalOpen}
        user={selectedUser}
        onClose={closeModal}
        onSave={handleSave}
      />
    </div>
  );
};
