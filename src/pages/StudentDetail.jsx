import React from "react";

const StudentDetail = () => {
  return (
    <div>
      <h3 className="text-2xl">Student Detail</h3>
      <div className="grid grid-cols-2 max-w-5xl mx-auto mt-5 h-20">
        <div className="flex justify-center items-center">
          <img src="/images/details.jpg" alt="" className="w-9/12" />
        </div>
        <div className="p-2">
          <h2 className="text-4xl text-center mb-2 font-semibold">
            Mary Smith
          </h2>

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Gender
                  </th>
                  <td class="px-6 py-4">Female</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Age
                  </th>
                  <td class="px-6 py-4">22 years</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Address
                  </th>
                  <td class="px-6 py-4">Old WAEC, Adisadel Estate</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Guardian Name
                  </th>
                  <td class="px-6 py-4">Mr. John Doe</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Guardian Phone Number
                  </th>
                  <td class="px-6 py-4">+233 245 000 1111</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Guardian Address
                  </th>
                  <td class="px-6 py-4">Old WAEC, Adisadel Estate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
