import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.resolve(__dirname, '../public/images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = [
  {
    name: 'about-portrait.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSIaz_aduZAW_ZEi8fw3TzSTqLniUeKWTpiZ5q7NuEIFh6k3bFqQengABNGCcCLZfhY33zWe_iV2GXQEYZzC4fSKha15cK9OiVYjOSKAITmHCy4yXHfrE07rthdjKCUudQLFUZho5WcAVBG6De398uza4N4GgnGzDH6N5Y7WLAFz8g2MEh9WMDOwkxI4zMVr2Y0MMvGjnPQm11LDh-ClXcoGMNJdRZY5kAlj3r5dFCw0qQURgc9KOWaFlCT30GALIKEM4'
  },
  {
    name: 'bjorns.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMNi00M5gPuk2hVaJS8UJzIsYYxrWn8do3LxOSkJhEoE6ZnmBmZTncYhaqes1nltOxlyfhW7T9riqbpSh4hzIoBemY-pjCYIpG3Qs6mKPcQYwv4R7nraRgajliWU3_8GB1czd6StuCZcoZ8441lsioKuho1CqXZ1ZkgvOvlaQADjuoihH7ThLky4Tb7Ldcn53tLBoTHj3ZmdD7dLV17cxMBkwBmPkYV52xZIDtFFC4OAlvaOkKcOiKTe7bdqOsyxGgMvM'
  },
  {
    name: 'bjorns-modal.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-9LInAYNX2064jrrzvi85aPbW_JkXto2_7WzjjeLiLPSHHJlWDhHQzuhfGJzPIiw-MmETDVE2nFSWcRk-AySa5RR4AkfNgct7857Qyj_jgyACdaq4UbHokPmkogMId7dJSxicLxMNWWSr3373lxmGBKF35b0vgojM9mPyA1EjRJUmFGWWr0KAD9Zyyrhy3nN_YDjNGgVaXV65Rre0orSM6UMVN0yWwVo_3mRZ3ul-UzaHJfEB7zrCjTNN2wCrZDfOZ88'
  },
  {
    name: 'exploz.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy4Kwe9HYTJAF5Z-zjKAtq1FWg-B3XuHo2shujqfebfjxeTX02nwhwPjAQf0-lDq6B_dx5Yt5SySX2_JGEKWmzubCXUBN9nTLnLdYj1j4qvABSw7qLIcsYXj-IXECyvfQ1GG9x__sc6nCQ1mOW1dzG54UPuhe4JH4trSvnVEPasDYsv9hZqO4-DVB7qh_L3Ez6iaEWrS_rWx83GttkzCtaMrv2Vyn_OjdzhXVwdMXy8LbWuaiLCGzcx0ot0UpxJDPjeTw'
  },
  {
    name: 'exploz-modal.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7ZwiKj_iP73WOzO7eu_6nt8QEQB2IQZZZxxcLdMaO-4rl2DNICqfkp7Lqewf59JalRj-RI3ZRaQsLTTj--_3l9OxbHwjSnQkOchdWSaWnzsTGclWAB_SpSKZ5bdLg-EzrZzFRYCXrRuyBui7jDmXPATzA2NbSYWSY-gZBlNTXDmM3KsTOLwQGMiQ3gTKUOy2XL1nC_NI4OuMrVEXWDNDhylu-ePtg3K9AsIZ8mTc8KZK3l5tTvD83kKfthSzrNTi0SJ0'
  },
  {
    name: 'koozen.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6NND7ry-9GaCi8mtr-AlrzHsXdSfLvxq8ZPkyGP_GbQFVdXat6xPn9fpSUStDzED1Xh5rH1VaAwYsByuL69XGEcpJQKhBNuAMCgkRH-C1qN7ovPVpdVfoFPWy0kHEtK2t_FH684tXCHt6aOL3NTlFchNMq1vxhHEUKs8AW3SeJMairuXKeBFZN3ql0ssWzJ9ABccCi_OdzbkYhcN68YpBlamddjkjxAuI9EdVGqU_k2ksoi5IfUQriKpKXqTOCjtHom0'
  },
  {
    name: 'koozen-modal.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsygu9lOH8f-eTyVPZzZ4pqEzFCRJIaHZpIpaEP922RFZoo60f94HTyVLXiqjrwKrri-qgyjX5GOvtbF6eHK0VLpXVfDkC2HdKUSAxzNAPrz7gogwoUuAvhj191KNYf1jSSelEQDYaMyrFQP8hqVZkY4zhhNn9Z6w1I_YVViK_0McncvKEIF4qWfeTPluHc5YksHg2gbNJSwbWnTdlHV6kL5fucOs5rX5aOysCuCKShQbbvuxulYGA2T1OQTFjsXcLVKo'
  },
  {
    name: 'orchard.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHS--zhlXhURPHcll6v8u-9OVvozGauTuAOsKpzCjMcj1XtLzH5Foutr8Gp4199gdrG-UDpVyIEg93gHooShlB9FLaHdY6v8-usw0Lu4hfWwejbbQK2lQBrJd-eVzvL1bCLyZPvK3nd64XUJXZmthVCfC5I3WB25nVW49hB8umDBT-Ysrmx5PzBhU1q4XFjPfuRXPwM70wYGMtW86FGDxi3y9PwczfnF3hbDkc03LyaIcWTNDYnV_u9BmMNjT6uQjcYsI'
  },
  {
    name: 'orchard-modal.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZseYAUnOI6rpsghU_DF_R-kdl8TTU3phyomBkM_FpcqmRMQFWjIlo4j1EW-yoOn20kenaQY_5M14Ynje-qahG8Ac7pI8rv_yPXQwvjIuE3EPCEBuaDTBWBGiUrcCKd-EScPTbEJUHf3wOh0eX8tHO4-0tuphJnldRkYzGy5Ddsl8GUIbf1pUlMBjH2K6dscno1XuUpwvKrmyk5v3-HtSed2xhPMuYtlImRJbj_l6jeWV6gMI-G69WQvMVMgYjd-zIv-c'
  },
  {
    name: 'smart.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1LrJ4GVOcg0ysMxZAumYDYmQQTUOgH9c_tLJ8UR8VRJYxokyVTy7HUyDJqk4Xs2GArh4Y_Auq90S6WvxG3bNrXe_FuTIDlWjpltcwQAHiHOy0yTxpJdl_q6GC7yDqAhdKtmfPYuwaaOT_Wu67oYHKPuDu42_4aw92RBPu9UWtS9M30cy23uyxKzjTZM9mXf43zMopfPeBwYg6CmDTVeFKLAmn87txCuBMEio_8JuUzqmmVwWwjVS8LwPsn0PLRZTH7ww'
  },
  {
    name: 'smart-modal.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQEook_63ZduCp01bT4Vo53pIpdkYfFkq0yt5nuDzkiz63976HmBnGfQFFzFx6HDgqCrQ1iLSrVe3nr_cszsMwSVn8oLkPLG9kWKImvSc8CEHEI8iQVe0ky3DS_XE6TyNfxZWc9rfkUZbpOCNjK4FP8sTrgDt_NMP_U4lpnH93c8QP6vmHDQkvrvoRSBzdAicHmBcFuQnqZ5zfd5xC4x06ozrG4Iz7brFZeTaWzKAa21HGD3wSs6tgWTebxB0THkj4Po0'
  },
  {
    name: 'beyond.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW6_urd14JwKUIxrt7AeSW3f7zQ-sTujfWIWWhNWerBjcEIHeN9QoCk37XeqU9U9R2vY8gvuOqzWc-Pv6DbML7UiPMDCRO7OO8sJaNsFnmyJ4zQkC2CNNWll6jM07DZ_-XhSSj4ynqEiH8unC1_dP0Bpli86M3_cIa4KUYwyb4ke-UDSOPrTyEYYNs_hC-cwexOFT6v66A8cxxycQ21W1ayCVf_Q9jjaXvlnpKj_LNtqF_UtTR2VDBFfg7FNuLjqk9I-U'
  },
  {
    name: 'beyond-modal.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz8lZvDSd-fI4xm5cadTAtMViOj_lcTW5X7wE31RlAJVebr6Q-iRxhsXQbJ5D9VAja7o-3OB0MAxS1VJiZc4Ba5EwYqGLXwu1F4cvzgdegKTS7TNa8UW2QbW_PTx7tYaJ3zu3sjEs7RJmOaq9EOJnpeFQPSVV-JWGXUdLESS-VL_sr9vi174SRrI8b7eRWTRGbK-62c0s8bkIEnWrdq9lPaciD_Fgo2JDvoH2RnMF1L05JlBt-9GTkeHHrOsNFjxQk2ow'
  },
  {
    name: 'camino.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABuBe7nIH4W9mmayx8nTkkRUSfs0cdqJ3pFbvLeDStgkhQDCZUOVVCbXVFCzuRxuSXHLoFaehCVgiuPVGO90GdyTrdqFhvnPDW2_fTvnDU48WRVYkL3lQ3mQmg-x1_VvkL0FxuJEl3_UFY98fJHZpdL60BOe13ZgMtyXIDoBSC3cyCAXwgAgyo4y9KwTtAr-X2mGCrAtiIQ-6shtGt6VxYnklnyn8IAIH6JOIw-rharXaFdTvPsvfkPku8ud5Alwx7J4o'
  },
  {
    name: 'camino-modal.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO3fCmXV2N4nHlkwXKY-cTFdr5FnBLsp9br8sEB8xnizwoHdvuo9yEvTwsEYGQJr12k3lM1SOqELxGZLHkkrjq4iqOY22lN53hER4mXt08faXUvY11e5gbDBwBFP_Xq5ZhLy0UmkBiwapFA_iMLKz8t67gNTY98Rjcxaj6OdUJY-zhtEmqS-ukJWxAaciVwJgbpGa87cq0eFEwYSNCDLKiFuou7EGXpKOIV5EGq6gyUjI2UYBQIo56nTX8DwpmKUd2Jew'
  },
  {
    name: 'eigenism.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA32eYg-dSrfYmq08HcX4I4n1BKUYU7gKhTwJ19NmrzDgvrwUeKlWQRCDfbTlkZu5nYIBLr7LlwcxPvtYNpo2NWlrXEv7Z5_WRy3YJHegDKhFZ-OtWyjuTw3mk0C1_BDOpAztZiEPwFE9XgpL87RGFgQOHiiPx_wHhkgQ9HgD1ZE_0-xeuNA7G2uRF6eSe-rMrO1XvcTo3npGj3zPW7ruOClCKTdhyVjVqMx6Q9OuWLuN2wCgxlGUrlZePr3BiXd6w1P3Y'
  },
  {
    name: 'eigenism-modal.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTYakeU8dAd-fxMaAIqWCdsKuk1O1hfgJScR6wH6tKK_1P_as3vHEuszdgFpWowxoghnN877NsghZiO4knE_J3agdFTSbArDWND_o2fpnDzJHxsqfLB7wGfn2Cgwo8ucz8AO2A5jWYPN_NPZk5pciVBYmTUC15WuP3Wzs-KtY2m0xw4ILIgF0CrDFzRl40CUfTY4QwfBJ2UuCAEBxnqHUGssIE_-ZYouNklVBd1AAisLeobMsaqS6hVjBVrZQJJDyBs8k'
  },
  {
    name: 'edgewire.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp5u7agNoXgoWD-_IpCfkX3ayrPjn_vpZi5Ja7jWKzMzcp6eDwPu84ynY7u1Kz-v6g1pr-ctrAAmznhwhl3H6qEN2RIDmRgxXvy5BRuLJTZ90UoIQ0fGgd1MZF1DcsZBscKNsXzV3Bs4V7fRCd-wXO5GqeTD5J463LbSZO_jNQ_jDfgw43F3_8VhYaq5hFocXXeAk2tFLHcODf4TJKEtDBhaOMKe9ede7WUHI4Iu22fcYrHUPP0pkX3ABSxY5_KKLWHno'
  },
  {
    name: 'edgewire-modal.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB_pHZcq92mKlqrzWCpaHwhb7r6Uo-bA2VewuNGL6uzB6FETBlzpw9e0j_yFHaszGhdstLsGvW1gi2SUEO4CcoovDo3L6pBpPBuoffkEMGWqZ__ToV7u1pJ_cu-1WcPVdV0leEGURfeLuany2005-NerD9ehzkk1oT5x7j34dZYEfCSV1JsQ7vNIkJcwu-ppgfuoA6XnXodzBCf7kuY2Wf02eytGWcFNYdWFWUN4usBfUmW9OE2-oMxBLklfsFfbPO4_c'
  },
  {
    name: 'revenueos.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTXROEzVBvteUqSzt46b5LYjxMPlLDeaolu-Ulq91OBpUz033R4ma8yAVcVvaMkrwAYB9auvGThKtFCrG-XiYY06tJRYM45d5HLnvG8JuDgOhh8DOfJSMbCetZo4yFzZDHq10_FfhlJlQ6nXcWlg8CoMQ2Eq7_j320A3nm5CuB5KbsEUi9qlZI-3-Y0BiGO2UsMX23n7IgVmhde334DUO35_VqKIO47o8Xl9L2ROMVlfc0AxLXdFAm9aeNkE4BakhF8gU'
  },
  {
    name: 'revenueos-modal.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbrtcEI6rZjP-6n_E-EkhFeeR-q3xOWYZWaN8Gs0zfbpPtAkrUjfgVfTLzvOw1eyV6wYZDhZ6zhdmjQYnt1oYres5gJUR9ri-hJ-7xKNTpYuqKCGah_0O7zki_cNRQuZ49bD4adi9l2JlGPLYnoCZnqLYQGKcc605bQqOro_Q5YR2zunkc1buZxaVqmq38YyKAvunGVoicknjH-s3LzXE8wUFeBh4czwnCMX3QJi6YV9GRj5QQ5vvi22lUqThDocNs3bs'
  },
  {
    name: 'solana.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwgBBNBh2RnaUHun09s2vZiW8GhMXP5SlVLGlNB2PdGkvqXcSJTDOKJk1CJsWEeCtas0j8NNQkd0O0m0rIgRWf2LLl-f0BttD5FBcYyvC6wJ1YH_TH-ncdFooFvGXHK8HRaor0MOFYcv389ZurrolOLOhG9PhXn20Hy7lCO2tWlCOeux04dQxUqKFQPaZatu4Iv3Q2Y04M7nt-dj6fnI-nqKQRRXcYZNtNl3urHA795KSzltw--oOwhFZAf7IqPhNgA4g'
  },
  {
    name: 'rvservice.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX309Lehzlt_ZSsO9nbOye4Sbj_wkP3BFcw1E69nACrX4q0iEGDF_rdmOO4CJIjacM8KFX9L-ZuO5Wzja0PMYC4Q8qQxNT0FK8IYULpZxw2-2DKulL4-k4DWmPFx5qghM7FZljuOA3ohmheDhEw6djhndATpJD4t_KlU-Pk2mKL-SkdCktkMijEyPvdJa7wcf73lKeWYUf29ZY_n9HTg6nWtv51o7RZ_P-JnLYias-ZFX3BiC1lMegE5jqK98utDmy7YQ'
  },
  {
    name: 'expertpm.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUm6rlnU1W17WiW6Q_TotjXS_bSG_4wHZAGZnHPLkjn5CiNN2p6olVsT1CGWKkcGXMwDYZQ6whdBwxzy6TjFHHDy-2c0TgF4WZr53ruWk01C92f3krwigo7KIpEUiYG4xCHUNkijeBO_eW_HnnEvVJ8a7IVoESKSVr4EtTEfbXL9LV4c1WSoQX6_yluEnjT-f78gixkILYwiMDiZwDC9K8RcNJ5PY2KTish-XOlVR2qPlVdRw3FZhGdmjW7lw-r96-zYg'
  },
  {
    name: 'firstact.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCa6AUHrfyksxLrl_Qpn9QRRghy5j_CCxqkgRjHgWXaGm9YFNU97_qxzdaaW-SF0Ds2LTOFO8bBqBRYTE3lmDc35pUBNv2jPLgctoZ_xaG5xxLPvB1DBglKp7eCBLZznSPCfT1jgoOM4hdCwcdhCcTcEhxI-PG9UZmvZsOMEXpUYEz8eRvfxQ8jgHXQFrgCxPIxg5qC1TI3iBj1QJlRejgpsD3fuGV4KWK2Ym9JbgjXlpPdmEtl2lWq7Ps-XYiJEGUhfA'
  },
  {
    name: 'identityswitch.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm7uxdrUAo47-cUmQ_Byqog6f-xopUvnQi0Ih47S9wQUuc7aM03J7bYPeys6nO8gN9oMDAsLt9uQVAqamWUY4gEM3Qt5FtOU2TLEfW4GbN-wieg6JCKqC1AoM7hD_ccvfSQRex5nPCaK7oecv490Zfmz4E4xD8HAhQDePRo4af0f4xKYiOnR2hptZMgY7yQDtMDO0kb1bOs99TJb5h4RPfmiVmgmAfB0mSLjgfSpIAPvXT8zV_OX_UWx9MMiuYR4xxtc4'
  },
  {
    name: 'smilemethod.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIBjUoCSkUTAgSEqYpowteHi0FpN8XgdBn4fZfkhXDbyih8RqkRj9704dG3sycb4hTnZc3U2Zu6I4vMuTOwKK9GFokDZq5ii2OTaipq_7RRnjhzEz5jyOfGJ8Yq0wDpZnOJibDASHCiX3LkiF0ITglvuwaxQhQQ2X5h46CWa2suUHHDGisZPdPqWFBmBxeZtpsrZ4LwEB8wVvngAT8wz93WwW7YXB-N0Z6q8E0WDJF5JQgf6GmBk_13fks0TNMMEDCqAc'
  },
  {
    name: 'survival.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWDBq_V4bHYlJ0JVnW3AiZ9rupF6W7-07bGBWqqlF6oY_jBVo22Lo5FX-qkJan6wETW0yMCrRRaWpeDJZMWBcJcxXqMj_5XIthN42mrNNoX6RFLQesnwRLHuTXSvDDkngZWiOB3uav5sz-QZETK9EWDDc5PAb4wp0c6o6PIlQfByVNiyLjIJ333DhXHnn9M8lwUeZRT7UgNs1quOmb7PPigDGGoT4UBOijyHiMYXPiq06VN5ojvs11IsVIti4RhVWNHWg'
  },
  {
    name: 'reframea.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6o64wNAQF6y6L-UGN-wWaP0HNsd8JAKYfvpo6iVjwalKNF4kLZsASiQKrJRbR_CPcGs4J4B7_P8lM_E97FdnoTkUo-XKpuRZAzOeszjPpOC5XtuCt1a5l1V-x2iH3CUbeNv_otb-n-nrqqsWssY3uja_7AKKRZcs9jdSiWZkCoHmuK02FiTxLB46vXGHi5c4yXpKMbyLqZ3Op9Sv7xwpmkX4NL0Zj0JmSa-9IBjddhCMtkRqwtYX7g01DcCuj9Ga2zbQ'
  },
  {
    name: 'reframeb.jpg',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh4zuRWXzQI_AgEzuzSFV8A2Vio5m--w3crbdCIh4gDjpXTDXTyu0YjMXx2F3avbFjAIBLUOHN_d5fqJmLRmHd56dq2wcEDeKz1Rb31dRccs9EEJxz4tq9mkAw1oNTL8mtuuYXAKYrH-6isC8UAyrJByWHnFqJKu1NQQktTnLvwae4IoBFp_KBOa5MUeAnYJwdjdUUGCwIV1NRvm02YlfBnyTiteNRbAQSgPlFEw4PJ66VTALR77blXFyKwtJd1HyWk7I'
  }
];

async function downloadAll() {
  console.log(`Starting download of ${images.length} images to ${targetDir}...`);
  for (const item of images) {
    const dest = path.join(targetDir, item.name);
    try {
      console.log(`Downloading ${item.name}...`);
      const response = await fetch(item.url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }
      const buffer = Buffer.from(await response.arrayBuffer());
      fs.writeFileSync(dest, buffer);
      console.log(`✓ Saved ${item.name} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`✗ Failed to download ${item.name}:`, err.message);
    }
  }
  console.log('Finished downloading images.');
}

downloadAll();
