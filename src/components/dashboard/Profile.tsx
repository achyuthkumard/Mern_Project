import {
  Avatar,
  Card,
  CardBody,
  Tab,
  Tabs,
  TabsHeader,
  Tooltip,
  Typography,
} from "@/components/Material";
import {
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";

interface ProfileProps {
  name: string;
  email: string;
}

const Profile = ({ name, email }: ProfileProps) => {
  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(data:image/jpeg;base64,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)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-6">
              <Avatar
                src="https://developers-home.vercel.app/api/users/profile/6399ec70bae966a1c3eb1e8c/avatar"
                alt="My profile image"
                size="xl"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {name}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  CEO / Co-Founder
                </Typography>
              </div>
            </div>
            <div className="w-96">
              <Tabs value="app">
                <TabsHeader>
                  <Tab value="app">
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    App
                  </Tab>
                  <Tab value="message">
                    <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                    Message
                  </Tab>
                  <Tab value="settings">
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Settings
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Profile Information
              </Typography>
              <ul className="flex flex-col gap-4 p-0">
                <li className="flex items-center gap-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-semibold capitalize"
                  >
                    Name:
                  </Typography>
                  <Typography
                    variant="small"
                    className="font-normal text-blue-gray-500"
                  >
                    {name}
                  </Typography>
                </li>
                <li className="flex items-center gap-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-semibold capitalize"
                  >
                    Email:
                  </Typography>
                  <Typography
                    variant="small"
                    className="font-normal text-blue-gray-500"
                  >
                    {email}
                  </Typography>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Profile Description
                </Typography>
                <Tooltip content="Edit Profile">
                  <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                </Tooltip>
              </div>

              <Typography
                variant="small"
                className="font-normal text-blue-gray-500"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum atque laborum culpa eveniet error, laudantium in minus
                obcaecati inventore, sapiente est officia iusto nulla
                dignissimos enim consectetur distinctio recusandae aperiam.
              </Typography>
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Platform Settings
              </Typography>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Profile;
