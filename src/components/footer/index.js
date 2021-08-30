import React from "react";

export default function Footer() {
  return (
    <div class="container-xxl mt-5 g-0">
      <footer class="text-white text-center text-lg-start bg-dark">
        <div class=" p-4">
          <div class="row mt-4">
            <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4">About company</h5>

              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>

              <p>
                Blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias.
              </p>
            </div>

            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4 pb-1">Search something</h5>

              <div class="form-outline form-white mb-4">
                <input
                  type="text"
                  id="formControlLg"
                  class="form-control form-control-lg"
                />
              </div>

              <ul class="fa-ul">
                <li class="mb-3">
                  <span class="fa-li">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="ms-2">Warsaw, 00-967, Poland</span>
                </li>
                <li class="mb-3">
                  <span class="fa-li">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="ms-2">contact@example.com</span>
                </li>
                <li class="mb-3">
                  <span class="fa-li">
                    <i class="fas fa-phone"></i>
                  </span>
                  <span class="ms-2">+ 48 234 567 88</span>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4">Opening hours</h5>

              <table class="table text-center text-white">
                <tbody class="fw-normal">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>8am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Fri - Sat:</td>
                    <td>8am - 1am</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>9am - 10pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="text-center p-3">
          © 2020 Copyright Reserved by
          <a class="text-white text-decoration-none" href="/">
            &nbsp;Ibad Ahmad
          </a>
        </div>
      </footer>
    </div>
  );
}
