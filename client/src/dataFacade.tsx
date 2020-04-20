/* tslint:disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum ActionStatus {
  Assigned = 'ASSIGNED',
  Completed = 'COMPLETED'
}

export enum ActionType {
  PhoneCall = 'PHONE_CALL',
  Delivery = 'DELIVERY'
}

/**
 * @model
 * @crud.update: false
 * @crud.delete: false
 */
export type DistributionCentre = {
   __typename?: 'DistributionCentre';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['String']>;
  long?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export type DistributionCentreInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['String']>;
  long?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  createDistributionCentre: DistributionCentre;
  createVolunteer: Volunteer;
  updateVolunteer: Volunteer;
  createVolounteerAction: VolounteerAction;
  updateVolounteerAction: VolounteerAction;
  deleteVolounteerAction: VolounteerAction;
  createReciever: Reciever;
  updateReciever: Reciever;
};


export type MutationCreateDistributionCentreArgs = {
  input?: Maybe<DistributionCentreInput>;
};


export type MutationCreateVolunteerArgs = {
  input?: Maybe<VolunteerInput>;
};


export type MutationUpdateVolunteerArgs = {
  input?: Maybe<VolunteerInput>;
};


export type MutationCreateVolounteerActionArgs = {
  input?: Maybe<VolounteerActionInput>;
};


export type MutationUpdateVolounteerActionArgs = {
  input?: Maybe<VolounteerActionInput>;
};


export type MutationDeleteVolounteerActionArgs = {
  input?: Maybe<VolounteerActionInput>;
};


export type MutationCreateRecieverArgs = {
  input?: Maybe<RecieverInput>;
};


export type MutationUpdateRecieverArgs = {
  input?: Maybe<RecieverInput>;
};

export type Query = {
   __typename?: 'Query';
  findAllDistributionCentres: Array<Maybe<DistributionCentre>>;
  findDistributionCentres: Array<Maybe<DistributionCentre>>;
  findAllVolunteers: Array<Maybe<Volunteer>>;
  findVolunteers: Array<Maybe<Volunteer>>;
  findAllVolounteerActions: Array<Maybe<VolounteerAction>>;
  findVolounteerActions: Array<Maybe<VolounteerAction>>;
  findAllRecievers: Array<Maybe<Reciever>>;
  findRecievers: Array<Maybe<Reciever>>;
};


export type QueryFindAllDistributionCentresArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryFindDistributionCentresArgs = {
  fields?: Maybe<DistributionCentreInput>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryFindAllVolunteersArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryFindVolunteersArgs = {
  fields?: Maybe<VolunteerInput>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryFindAllVolounteerActionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryFindVolounteerActionsArgs = {
  fields?: Maybe<VolounteerActionInput>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryFindAllRecieversArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryFindRecieversArgs = {
  fields?: Maybe<RecieverInput>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

/**
 * @model
 * @crud.delete: false
 */
export type Reciever = {
   __typename?: 'Reciever';
  id: Scalars['ID'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  prefferedProducts?: Maybe<Scalars['String']>;
  /** @oneToMany field: 'reciever', key: 'recieverId' */
  actions?: Maybe<Array<Maybe<VolounteerAction>>>;
  version?: Maybe<Scalars['Int']>;
};

export type RecieverInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  prefferedProducts?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export type Subscription = {
   __typename?: 'Subscription';
  newDistributionCentre: DistributionCentre;
  newVolunteer: Volunteer;
  updatedVolunteer: Volunteer;
  newVolounteerAction: VolounteerAction;
  updatedVolounteerAction: VolounteerAction;
  deletedVolounteerAction: VolounteerAction;
  newReciever: Reciever;
  updatedReciever: Reciever;
};


export type SubscriptionNewDistributionCentreArgs = {
  input?: Maybe<DistributionCentreInput>;
};


export type SubscriptionNewVolunteerArgs = {
  input?: Maybe<VolunteerInput>;
};


export type SubscriptionUpdatedVolunteerArgs = {
  input?: Maybe<VolunteerInput>;
};


export type SubscriptionNewVolounteerActionArgs = {
  input?: Maybe<VolounteerActionInput>;
};


export type SubscriptionUpdatedVolounteerActionArgs = {
  input?: Maybe<VolounteerActionInput>;
};


export type SubscriptionDeletedVolounteerActionArgs = {
  input?: Maybe<VolounteerActionInput>;
};


export type SubscriptionNewRecieverArgs = {
  input?: Maybe<RecieverInput>;
};


export type SubscriptionUpdatedRecieverArgs = {
  input?: Maybe<RecieverInput>;
};

/**
 * Represents action that is assigned to volounteer
 * @model
 */
export type VolounteerAction = {
   __typename?: 'VolounteerAction';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  products: Scalars['String'];
  status?: Maybe<ActionStatus>;
  actionType?: Maybe<ActionType>;
  /** @manyToOne field: 'actions', key: 'volounteerId' */
  volounteer?: Maybe<Volunteer>;
  /** @manyToOne field: 'actions', key: 'recieverId' */
  reciever?: Maybe<Reciever>;
  version?: Maybe<Scalars['Int']>;
};

export type VolounteerActionInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  products?: Maybe<Scalars['String']>;
  status?: Maybe<ActionStatus>;
  actionType?: Maybe<ActionType>;
  volounteerId?: Maybe<Scalars['ID']>;
  recieverId?: Maybe<Scalars['ID']>;
  version?: Maybe<Scalars['Int']>;
};

/**
 * @model
 * @crud.delete: false
 */
export type Volunteer = {
   __typename?: 'Volunteer';
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  dateOfBirth: Scalars['String'];
  canPhoneCall: Scalars['Boolean'];
  canDeliver: Scalars['Boolean'];
  /** @oneToMany field: 'volounteer', key: 'volounteerId' */
  actions?: Maybe<Array<Maybe<VolounteerAction>>>;
  version?: Maybe<Scalars['Int']>;
};

export type VolunteerInput = {
  id?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  canPhoneCall?: Maybe<Scalars['Boolean']>;
  canDeliver?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['Int']>;
};

export type DistributionCentreFieldsFragment = (
  { __typename?: 'DistributionCentre' }
  & Pick<DistributionCentre, 'id' | 'name' | 'address' | 'address2' | 'city' | 'lat' | 'long'>
);

export type DistributionCentreExpandedFieldsFragment = (
  { __typename?: 'DistributionCentre' }
  & Pick<DistributionCentre, 'id' | 'name' | 'address' | 'address2' | 'city' | 'lat' | 'long'>
);

export type RecieverFieldsFragment = (
  { __typename?: 'Reciever' }
  & Pick<Reciever, 'id' | 'name' | 'phone' | 'address' | 'prefferedProducts'>
);

export type RecieverExpandedFieldsFragment = (
  { __typename?: 'Reciever' }
  & Pick<Reciever, 'id' | 'name' | 'phone' | 'address' | 'prefferedProducts'>
  & { actions?: Maybe<Array<Maybe<(
    { __typename?: 'VolounteerAction' }
    & Pick<VolounteerAction, 'id' | 'title' | 'description' | 'products' | 'status' | 'actionType'>
  )>>> }
);

export type VolounteerActionFieldsFragment = (
  { __typename?: 'VolounteerAction' }
  & Pick<VolounteerAction, 'id' | 'title' | 'description' | 'products' | 'status' | 'actionType'>
);

export type VolounteerActionExpandedFieldsFragment = (
  { __typename?: 'VolounteerAction' }
  & Pick<VolounteerAction, 'id' | 'title' | 'description' | 'products' | 'status' | 'actionType'>
);

export type VolunteerFieldsFragment = (
  { __typename?: 'Volunteer' }
  & Pick<Volunteer, 'id' | 'firstName' | 'lastName' | 'email' | 'username' | 'address1' | 'address2' | 'city' | 'dateOfBirth' | 'canPhoneCall' | 'canDeliver'>
);

export type VolunteerExpandedFieldsFragment = (
  { __typename?: 'Volunteer' }
  & Pick<Volunteer, 'id' | 'firstName' | 'lastName' | 'email' | 'username' | 'address1' | 'address2' | 'city' | 'dateOfBirth' | 'canPhoneCall' | 'canDeliver'>
  & { actions?: Maybe<Array<Maybe<(
    { __typename?: 'VolounteerAction' }
    & Pick<VolounteerAction, 'id' | 'title' | 'description' | 'products' | 'status' | 'actionType'>
  )>>> }
);

export type CreateDistributionCentreMutationVariables = {
  input: DistributionCentreInput;
};


export type CreateDistributionCentreMutation = (
  { __typename?: 'Mutation' }
  & { createDistributionCentre: (
    { __typename?: 'DistributionCentre' }
    & DistributionCentreFieldsFragment
  ) }
);

export type CreateRecieverMutationVariables = {
  input: RecieverInput;
};


export type CreateRecieverMutation = (
  { __typename?: 'Mutation' }
  & { createReciever: (
    { __typename?: 'Reciever' }
    & RecieverFieldsFragment
  ) }
);

export type CreateVolounteerActionMutationVariables = {
  input: VolounteerActionInput;
};


export type CreateVolounteerActionMutation = (
  { __typename?: 'Mutation' }
  & { createVolounteerAction: (
    { __typename?: 'VolounteerAction' }
    & VolounteerActionFieldsFragment
  ) }
);

export type CreateVolunteerMutationVariables = {
  input: VolunteerInput;
};


export type CreateVolunteerMutation = (
  { __typename?: 'Mutation' }
  & { createVolunteer: (
    { __typename?: 'Volunteer' }
    & VolunteerFieldsFragment
  ) }
);

export type UpdateDistributionCentreMutationVariables = {
  input: DistributionCentreInput;
};


export type UpdateDistributionCentreMutation = { __typename?: 'Mutation' };

export type UpdateRecieverMutationVariables = {
  input: RecieverInput;
};


export type UpdateRecieverMutation = (
  { __typename?: 'Mutation' }
  & { updateReciever: (
    { __typename?: 'Reciever' }
    & RecieverFieldsFragment
  ) }
);

export type UpdateVolounteerActionMutationVariables = {
  input: VolounteerActionInput;
};


export type UpdateVolounteerActionMutation = (
  { __typename?: 'Mutation' }
  & { updateVolounteerAction: (
    { __typename?: 'VolounteerAction' }
    & VolounteerActionFieldsFragment
  ) }
);

export type UpdateVolunteerMutationVariables = {
  input: VolunteerInput;
};


export type UpdateVolunteerMutation = (
  { __typename?: 'Mutation' }
  & { updateVolunteer: (
    { __typename?: 'Volunteer' }
    & VolunteerFieldsFragment
  ) }
);

export type FindActiveVolunteerQueryVariables = {
  username: Scalars['String'];
};


export type FindActiveVolunteerQuery = (
  { __typename?: 'Query' }
  & { findVolunteers: Array<Maybe<(
    { __typename?: 'Volunteer' }
    & VolunteerFieldsFragment
  )>> }
);

export type FindMyVolounteerActionsQueryVariables = {
  volounteerId: Scalars['ID'];
  status?: Maybe<ActionStatus>;
};


export type FindMyVolounteerActionsQuery = (
  { __typename?: 'Query' }
  & { findVolounteerActions: Array<Maybe<(
    { __typename?: 'VolounteerAction' }
    & VolounteerActionExpandedFieldsFragment
  )>> }
);

export const DistributionCentreFieldsFragmentDoc = gql`
    fragment DistributionCentreFields on DistributionCentre {
  id
  name
  address
  address2
  city
  lat
  long
}
    `;
export const DistributionCentreExpandedFieldsFragmentDoc = gql`
    fragment DistributionCentreExpandedFields on DistributionCentre {
  id
  name
  address
  address2
  city
  lat
  long
}
    `;
export const RecieverFieldsFragmentDoc = gql`
    fragment RecieverFields on Reciever {
  id
  name
  phone
  address
  prefferedProducts
}
    `;
export const RecieverExpandedFieldsFragmentDoc = gql`
    fragment RecieverExpandedFields on Reciever {
  id
  name
  phone
  address
  prefferedProducts
  actions {
    id
    title
    description
    products
    status
    actionType
  }
}
    `;
export const VolounteerActionFieldsFragmentDoc = gql`
    fragment VolounteerActionFields on VolounteerAction {
  id
  title
  description
  products
  status
  actionType
}
    `;
export const VolounteerActionExpandedFieldsFragmentDoc = gql`
    fragment VolounteerActionExpandedFields on VolounteerAction {
  id
  title
  description
  products
  status
  actionType
}
    `;
export const VolunteerFieldsFragmentDoc = gql`
    fragment VolunteerFields on Volunteer {
  id
  firstName
  lastName
  email
  username
  address1
  address2
  city
  dateOfBirth
  canPhoneCall
  canDeliver
}
    `;
export const VolunteerExpandedFieldsFragmentDoc = gql`
    fragment VolunteerExpandedFields on Volunteer {
  id
  firstName
  lastName
  email
  username
  address1
  address2
  city
  dateOfBirth
  canPhoneCall
  canDeliver
  actions {
    id
    title
    description
    products
    status
    actionType
  }
}
    `;
export const CreateDistributionCentreDocument = gql`
    mutation createDistributionCentre($input: DistributionCentreInput!) {
  createDistributionCentre(input: $input) {
    ...DistributionCentreFields
  }
}
    ${DistributionCentreFieldsFragmentDoc}`;
export type CreateDistributionCentreMutationFn = ApolloReactCommon.MutationFunction<CreateDistributionCentreMutation, CreateDistributionCentreMutationVariables>;

/**
 * __useCreateDistributionCentreMutation__
 *
 * To run a mutation, you first call `useCreateDistributionCentreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDistributionCentreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDistributionCentreMutation, { data, loading, error }] = useCreateDistributionCentreMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDistributionCentreMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateDistributionCentreMutation, CreateDistributionCentreMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateDistributionCentreMutation, CreateDistributionCentreMutationVariables>(CreateDistributionCentreDocument, baseOptions);
      }
export type CreateDistributionCentreMutationHookResult = ReturnType<typeof useCreateDistributionCentreMutation>;
export type CreateDistributionCentreMutationResult = ApolloReactCommon.MutationResult<CreateDistributionCentreMutation>;
export type CreateDistributionCentreMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateDistributionCentreMutation, CreateDistributionCentreMutationVariables>;
export const CreateRecieverDocument = gql`
    mutation createReciever($input: RecieverInput!) {
  createReciever(input: $input) {
    ...RecieverFields
  }
}
    ${RecieverFieldsFragmentDoc}`;
export type CreateRecieverMutationFn = ApolloReactCommon.MutationFunction<CreateRecieverMutation, CreateRecieverMutationVariables>;

/**
 * __useCreateRecieverMutation__
 *
 * To run a mutation, you first call `useCreateRecieverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRecieverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRecieverMutation, { data, loading, error }] = useCreateRecieverMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRecieverMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateRecieverMutation, CreateRecieverMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateRecieverMutation, CreateRecieverMutationVariables>(CreateRecieverDocument, baseOptions);
      }
export type CreateRecieverMutationHookResult = ReturnType<typeof useCreateRecieverMutation>;
export type CreateRecieverMutationResult = ApolloReactCommon.MutationResult<CreateRecieverMutation>;
export type CreateRecieverMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateRecieverMutation, CreateRecieverMutationVariables>;
export const CreateVolounteerActionDocument = gql`
    mutation createVolounteerAction($input: VolounteerActionInput!) {
  createVolounteerAction(input: $input) {
    ...VolounteerActionFields
  }
}
    ${VolounteerActionFieldsFragmentDoc}`;
export type CreateVolounteerActionMutationFn = ApolloReactCommon.MutationFunction<CreateVolounteerActionMutation, CreateVolounteerActionMutationVariables>;

/**
 * __useCreateVolounteerActionMutation__
 *
 * To run a mutation, you first call `useCreateVolounteerActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVolounteerActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVolounteerActionMutation, { data, loading, error }] = useCreateVolounteerActionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVolounteerActionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateVolounteerActionMutation, CreateVolounteerActionMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateVolounteerActionMutation, CreateVolounteerActionMutationVariables>(CreateVolounteerActionDocument, baseOptions);
      }
export type CreateVolounteerActionMutationHookResult = ReturnType<typeof useCreateVolounteerActionMutation>;
export type CreateVolounteerActionMutationResult = ApolloReactCommon.MutationResult<CreateVolounteerActionMutation>;
export type CreateVolounteerActionMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateVolounteerActionMutation, CreateVolounteerActionMutationVariables>;
export const CreateVolunteerDocument = gql`
    mutation createVolunteer($input: VolunteerInput!) {
  createVolunteer(input: $input) {
    ...VolunteerFields
  }
}
    ${VolunteerFieldsFragmentDoc}`;
export type CreateVolunteerMutationFn = ApolloReactCommon.MutationFunction<CreateVolunteerMutation, CreateVolunteerMutationVariables>;

/**
 * __useCreateVolunteerMutation__
 *
 * To run a mutation, you first call `useCreateVolunteerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVolunteerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVolunteerMutation, { data, loading, error }] = useCreateVolunteerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVolunteerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateVolunteerMutation, CreateVolunteerMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateVolunteerMutation, CreateVolunteerMutationVariables>(CreateVolunteerDocument, baseOptions);
      }
export type CreateVolunteerMutationHookResult = ReturnType<typeof useCreateVolunteerMutation>;
export type CreateVolunteerMutationResult = ApolloReactCommon.MutationResult<CreateVolunteerMutation>;
export type CreateVolunteerMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateVolunteerMutation, CreateVolunteerMutationVariables>;
export const UpdateDistributionCentreDocument = gql`
    mutation updateDistributionCentre($input: DistributionCentreInput!) {
  updateDistributionCentre(input: $input) {
    ...DistributionCentreFields
  }
}
    ${DistributionCentreFieldsFragmentDoc}`;
export type UpdateDistributionCentreMutationFn = ApolloReactCommon.MutationFunction<UpdateDistributionCentreMutation, UpdateDistributionCentreMutationVariables>;

/**
 * __useUpdateDistributionCentreMutation__
 *
 * To run a mutation, you first call `useUpdateDistributionCentreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDistributionCentreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDistributionCentreMutation, { data, loading, error }] = useUpdateDistributionCentreMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDistributionCentreMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateDistributionCentreMutation, UpdateDistributionCentreMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateDistributionCentreMutation, UpdateDistributionCentreMutationVariables>(UpdateDistributionCentreDocument, baseOptions);
      }
export type UpdateDistributionCentreMutationHookResult = ReturnType<typeof useUpdateDistributionCentreMutation>;
export type UpdateDistributionCentreMutationResult = ApolloReactCommon.MutationResult<UpdateDistributionCentreMutation>;
export type UpdateDistributionCentreMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateDistributionCentreMutation, UpdateDistributionCentreMutationVariables>;
export const UpdateRecieverDocument = gql`
    mutation updateReciever($input: RecieverInput!) {
  updateReciever(input: $input) {
    ...RecieverFields
  }
}
    ${RecieverFieldsFragmentDoc}`;
export type UpdateRecieverMutationFn = ApolloReactCommon.MutationFunction<UpdateRecieverMutation, UpdateRecieverMutationVariables>;

/**
 * __useUpdateRecieverMutation__
 *
 * To run a mutation, you first call `useUpdateRecieverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRecieverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRecieverMutation, { data, loading, error }] = useUpdateRecieverMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateRecieverMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateRecieverMutation, UpdateRecieverMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateRecieverMutation, UpdateRecieverMutationVariables>(UpdateRecieverDocument, baseOptions);
      }
export type UpdateRecieverMutationHookResult = ReturnType<typeof useUpdateRecieverMutation>;
export type UpdateRecieverMutationResult = ApolloReactCommon.MutationResult<UpdateRecieverMutation>;
export type UpdateRecieverMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateRecieverMutation, UpdateRecieverMutationVariables>;
export const UpdateVolounteerActionDocument = gql`
    mutation updateVolounteerAction($input: VolounteerActionInput!) {
  updateVolounteerAction(input: $input) {
    ...VolounteerActionFields
  }
}
    ${VolounteerActionFieldsFragmentDoc}`;
export type UpdateVolounteerActionMutationFn = ApolloReactCommon.MutationFunction<UpdateVolounteerActionMutation, UpdateVolounteerActionMutationVariables>;

/**
 * __useUpdateVolounteerActionMutation__
 *
 * To run a mutation, you first call `useUpdateVolounteerActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVolounteerActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVolounteerActionMutation, { data, loading, error }] = useUpdateVolounteerActionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVolounteerActionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateVolounteerActionMutation, UpdateVolounteerActionMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateVolounteerActionMutation, UpdateVolounteerActionMutationVariables>(UpdateVolounteerActionDocument, baseOptions);
      }
export type UpdateVolounteerActionMutationHookResult = ReturnType<typeof useUpdateVolounteerActionMutation>;
export type UpdateVolounteerActionMutationResult = ApolloReactCommon.MutationResult<UpdateVolounteerActionMutation>;
export type UpdateVolounteerActionMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateVolounteerActionMutation, UpdateVolounteerActionMutationVariables>;
export const UpdateVolunteerDocument = gql`
    mutation updateVolunteer($input: VolunteerInput!) {
  updateVolunteer(input: $input) {
    ...VolunteerFields
  }
}
    ${VolunteerFieldsFragmentDoc}`;
export type UpdateVolunteerMutationFn = ApolloReactCommon.MutationFunction<UpdateVolunteerMutation, UpdateVolunteerMutationVariables>;

/**
 * __useUpdateVolunteerMutation__
 *
 * To run a mutation, you first call `useUpdateVolunteerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVolunteerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVolunteerMutation, { data, loading, error }] = useUpdateVolunteerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVolunteerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateVolunteerMutation, UpdateVolunteerMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateVolunteerMutation, UpdateVolunteerMutationVariables>(UpdateVolunteerDocument, baseOptions);
      }
export type UpdateVolunteerMutationHookResult = ReturnType<typeof useUpdateVolunteerMutation>;
export type UpdateVolunteerMutationResult = ApolloReactCommon.MutationResult<UpdateVolunteerMutation>;
export type UpdateVolunteerMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateVolunteerMutation, UpdateVolunteerMutationVariables>;
export const FindActiveVolunteerDocument = gql`
    query findActiveVolunteer($username: String!) {
  findVolunteers(fields: {username: $username}, limit: 1) {
    ...VolunteerFields
  }
}
    ${VolunteerFieldsFragmentDoc}`;

/**
 * __useFindActiveVolunteerQuery__
 *
 * To run a query within a React component, call `useFindActiveVolunteerQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindActiveVolunteerQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindActiveVolunteerQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useFindActiveVolunteerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindActiveVolunteerQuery, FindActiveVolunteerQueryVariables>) {
        return ApolloReactHooks.useQuery<FindActiveVolunteerQuery, FindActiveVolunteerQueryVariables>(FindActiveVolunteerDocument, baseOptions);
      }
export function useFindActiveVolunteerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindActiveVolunteerQuery, FindActiveVolunteerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindActiveVolunteerQuery, FindActiveVolunteerQueryVariables>(FindActiveVolunteerDocument, baseOptions);
        }
export type FindActiveVolunteerQueryHookResult = ReturnType<typeof useFindActiveVolunteerQuery>;
export type FindActiveVolunteerLazyQueryHookResult = ReturnType<typeof useFindActiveVolunteerLazyQuery>;
export type FindActiveVolunteerQueryResult = ApolloReactCommon.QueryResult<FindActiveVolunteerQuery, FindActiveVolunteerQueryVariables>;
export const FindMyVolounteerActionsDocument = gql`
    query findMyVolounteerActions($volounteerId: ID!, $status: ActionStatus) {
  findVolounteerActions(fields: {volounteerId: $volounteerId, status: $status}) {
    ...VolounteerActionExpandedFields
  }
}
    ${VolounteerActionExpandedFieldsFragmentDoc}`;

/**
 * __useFindMyVolounteerActionsQuery__
 *
 * To run a query within a React component, call `useFindMyVolounteerActionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMyVolounteerActionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMyVolounteerActionsQuery({
 *   variables: {
 *      volounteerId: // value for 'volounteerId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useFindMyVolounteerActionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindMyVolounteerActionsQuery, FindMyVolounteerActionsQueryVariables>) {
        return ApolloReactHooks.useQuery<FindMyVolounteerActionsQuery, FindMyVolounteerActionsQueryVariables>(FindMyVolounteerActionsDocument, baseOptions);
      }
export function useFindMyVolounteerActionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindMyVolounteerActionsQuery, FindMyVolounteerActionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindMyVolounteerActionsQuery, FindMyVolounteerActionsQueryVariables>(FindMyVolounteerActionsDocument, baseOptions);
        }
export type FindMyVolounteerActionsQueryHookResult = ReturnType<typeof useFindMyVolounteerActionsQuery>;
export type FindMyVolounteerActionsLazyQueryHookResult = ReturnType<typeof useFindMyVolounteerActionsLazyQuery>;
export type FindMyVolounteerActionsQueryResult = ApolloReactCommon.QueryResult<FindMyVolounteerActionsQuery, FindMyVolounteerActionsQueryVariables>;