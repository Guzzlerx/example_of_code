import { apiSlice } from 'redux/api/apiSlice';
import { setIsLoadingAndIsAuthenticated } from 'redux/userDataSlice/userDataSlice';
import { IUserGeneralInfo } from 'routes/Main/UserAccount/Tabs/GeneralInfo/type';
import { INotificationSettings } from 'routes/Main/UserAccount/Tabs/Notifications/type';
import { ISecurityQuestionScheme } from 'routes/Registration/Parts/SecurityQuestionStep/type';

export const userApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUserGeneralInfo: builder.query<IUserGeneralInfo, void>({
      query: () => '/user/settings/information',
      providesTags: ['generalInfo'],
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(setIsLoadingAndIsAuthenticated({ isAuthenticated: true, isLoading: false }));
        } catch (error) {
          console.error(error);
        }
      },
    }),
    changeSecurityQuestion: builder.mutation<void, ISecurityQuestionScheme>({
      query: body => ({
        url: '/user/settings/controls',
        method: 'PATCH',
        body,
      }),
    }),
    changePassword: builder.mutation<void, { newPassword: string; password: string }>({
      query: data => ({
        url: '/user/settings/password',
        method: 'PATCH',
        body: data,
      }),
    }),
    getNotificationSettings: builder.query<INotificationSettings, void>({
      query: () => '/user/settings/notifications/all',
      providesTags: ['notificationSettings'],
    }),
    changeEmail: builder.mutation<void, { newEmail: string }>({
      query: data => ({
        url: '/user/settings/email',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['generalInfo', 'notificationSettings'],
    }),
    changeEmailSubscription: builder.mutation<void, { notificationStatus: boolean }>({
      query: data => ({
        url: '/user/settings/notifications/email',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['notificationSettings'],
    }),
    changePushNotification: builder.mutation<void, { notificationStatus: boolean }>({
      query: data => ({
        url: '/user/settings/notifications/push',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['notificationSettings'],
    }),
  }),
});

export const {
  useGetUserGeneralInfoQuery,
  useLazyGetUserGeneralInfoQuery,
  useChangeSecurityQuestionMutation,
  useChangePasswordMutation,
  useLazyGetNotificationSettingsQuery,
  useChangeEmailMutation,
  useChangeEmailSubscriptionMutation,
  useChangePushNotificationMutation,
  useGetNotificationSettingsQuery,
} = userApi;
