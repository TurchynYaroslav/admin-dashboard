import Table from "../components/table/Table";
import Button from "../components/ui/Button";
import { UserModal, UsersHeader, useUserLogic } from "../features/users/index";
const UsersPage = () => {
  const {
    users,
    columns,
    isModalOpen,
    selectedUser,
    openModalForCreate,
    handleSave,
    closeModal,
  } = useUserLogic();

  return (
    <div className="relative w-full h-full">
      <UsersHeader>
        <div className="">
          <h1>Users</h1>
        </div>
        <div className="">
          <Button onClick={openModalForCreate} variant="create">
            Create
          </Button>
        </div>
      </UsersHeader>
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

export default UsersPage;
