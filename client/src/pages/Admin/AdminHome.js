import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank</h3>
          <hr />
          <p>
          Welcome to Our Blood Bank Administration

At Blood Bank, we're dedicated to saving lives through the power of donated blood. Our blood bank administration website is your gateway to a world of compassion, hope, and community.
</p>
<p>
Life-Saving Mission: We are committed to the noble cause of saving lives. Every drop of blood you donate can make a significant difference.

</p>
Efficiency and Accessibility: Our cutting-edge administration system ensures that the right blood reaches the right people when they need it the most, efficiently and conveniently.
<p>

Community-Centric Approach: We believe in the strength of our community. Join us in this lifesaving mission by donating, volunteering, or simply spreading the word
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
