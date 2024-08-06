import {
    v as m,
    i as f,
    c as g,
    w as s,
    o as n,
    a as o,
    u as e,
    G as p,
    f as _,
    g as h,
    b as i,
    d as a,
    n as y,
    h as v,
    e as b,
} from "./app-4475db5a.js";
import { _ as x } from "./GuestLayout-c88da5b4.js";
import { P as k } from "./PrimaryButton-0f143ca0.js";
import "./ApplicationLogo-84b1a804.js";
import "./_plugin-vue_export-helper-c27b6911.js";
const w = i(
        "div",
        { class: "mb-4 text-sm text-gray-600" },
        " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",
        -1
    ),
    V = { key: 0, class: "mb-4 font-medium text-sm text-green-600" },
    B = ["onSubmit"],
    E = { class: "mt-4 flex items-center justify-between" },
    T = {
        __name: "VerifyEmail",
        props: { status: { type: String } },
        setup(r) {
            const c = r,
                t = m({}),
                d = () => {
                    t.post(route("verification.send"));
                },
                u = f(() => c.status === "verification-link-sent");
            return (l, N) => (
                n(),
                g(x, null, {
                    default: s(() => [
                        o(e(p), { title: "Email Verification" }),
                        w,
                        e(u)
                            ? (n(),
                              _(
                                  "div",
                                  V,
                                  " A new verification link has been sent to the email address you provided during registration. "
                              ))
                            : h("", !0),
                        i(
                            "form",
                            { onSubmit: b(d, ["prevent"]) },
                            [
                                i("div", E, [
                                    o(
                                        k,
                                        {
                                            class: y({
                                                "opacity-25": e(t).processing,
                                            }),
                                            disabled: e(t).processing,
                                        },
                                        {
                                            default: s(() => [
                                                a(
                                                    " Resend Verification Email "
                                                ),
                                            ]),
                                            _: 1,
                                        },
                                        8,
                                        ["class", "disabled"]
                                    ),
                                    o(
                                        e(v),
                                        {
                                            href: l.route("logout"),
                                            method: "post",
                                            as: "button",
                                            class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                        },
                                        {
                                            default: s(() => [a("Log Out")]),
                                            _: 1,
                                        },
                                        8,
                                        ["href"]
                                    ),
                                ]),
                            ],
                            40,
                            B
                        ),
                    ]),
                    _: 1,
                })
            );
        },
    };
export { T as default };
