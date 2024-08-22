# Activity-Mates
Activity Mate - An app app for finding other people to do activities with and make friends!




# Mobile app development and Expo


## Run locally
1. Create a new dev build by running: `eas build --profile development-simulator --platform ios`
2. Wait for the build to complete, when prompted in the terminal to install on ios simulator, select yes.
3. On the PC, run the command `npx expo start`
4. press `i` to open the iOS simulator on the pc.



## Run on physical iPhone
1. Create a new dev build by running: `eas build --profile development --platform ios`.
2. Install the new build on the phone by scanning the QR code.
3. On the PC, run the command `npx expo start`
4. Open the expo app on the physical iPhone, adn open the app (note: phone and PC must be on same network)


## Distribute the app to a Phone
Download the app on your phone, to be able to run WITHOUT the expo server.

1. Run `eas build --profile test --platform ios`
2. Install the app on the phone by scanning the QR code from the build

## Other
* To add a device to expo, run `eas device:create` (requires apple developer account)




# Backend
* REST API with Django and Django Ninja
* Automatic API documentation generation
* Architecture:  Repository pattern with services. All business logic is separated out into services, and data fetching is only done through repository classes.   


## Generate Typescript client from API
* API documentation is available at `http://localhost:8000/api/docs#/default/apitemplate_api_hello`.
Open API generator is set up to generate typescript code from the openapi file, by running the script`generate-api-typescript-client.sh`.

## User sign up
Supabase is used to handle auth.
A trigger is added to the user table, so that each time a user signs up, a new user is added to the public.users table (defined with the Django model User).

```sql
drop trigger if exists on_auth_user_created on auth.users;
drop function if exists handle_new_user;

-- inserts a row into public.users
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.users (id, full_name, email, phone_number, country, city, date_of_birth, created_at)
  values (new.id, new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'email',  new.raw_user_meta_data ->> 'phone_number', new.raw_user_meta_data ->> 'country', new.raw_user_meta_data ->> 'city', (new.raw_user_meta_data ->> 'date_of_birth')::DATE, NOW());
  return new;
end;
$$;

-- trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

```

